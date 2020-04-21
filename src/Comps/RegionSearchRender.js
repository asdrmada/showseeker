import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, emphasize } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { v4 as uuidv4 } from 'uuid';

function RegionSearchRender({ regionSearch }){

  const [regionRequest, changeRegionRequest] = useState('')
  const [locationChoices, setLocationChoices] = useState([]);
  const [dates, setDates] = useState([]);

  const SK_API_LOCALSEARCH = `https://api.songkick.com/api/3.0/search/locations.json?query=`
  const SK_API_LOCATIONDATES = 'https://api.songkick.com/api/3.0/metro_areas'

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 275,
      marginBottom: 25,
      maxHeight: 300,
      marginLeft:20,
      marginRight:20,
    },
    title: {
      fontSize: 14,
      textEmphasis: 10
    },
    pos: {
      marginBottom: 12,
    }
  })

  const classes = useStyles();

  useEffect( () => {
    async function reqGet() {
      const searchReq = await axios.get(`${SK_API_LOCALSEARCH}${regionRequest}&apikey=E3ZwjI3B1GSjGTe1`);
      let regRet = searchReq.data.resultsPage.results.location
      setLocationChoices(regRet); 
      let locationCode = regRet[0].metroArea.id
      
      console.log(regRet);
      console.log(locationCode);
      
      const reqDates = await axios.get(`${SK_API_LOCATIONDATES}/${locationCode}/calendar.json?apikey=E3ZwjI3B1GSjGTe1`)
      let locDates = reqDates.data.resultsPage.results.event
      console.log(locDates);
      setDates(locDates);
      console.log(dates);
    }
   reqGet();
  }
  , [regionRequest]);

  const renderDates = dates.slice(0,10).map(l =>(

    <Card key = { uuidv4() } className = {classes.root} variant = 'outlined' style = {{boxShadow: '5px 10px 8px'}}>
      <CardContent variant='outlined'>
        <Typography variant = 'h6'>
         {l.displayName}
        </Typography>



        <Typography>
         {l.venue.displayName}
        </Typography>
       <hr></hr>
       <Typography>
        <a href={l.uri}>More Info</a>
       </Typography>
      </CardContent>
    </Card>

))

    return(
    <>
        <Button variant="contained" color="secondary" onClick={() => changeRegionRequest(regionSearch)}>
          Search here!
        </Button>

      <div style = {{width: '%' }}>
        <Box display= 'flex' flexWrap = 'wrap' justifyContent="center">
          {renderDates}
        </Box>
      </div>

    </>
    )
}

export default RegionSearchRender;