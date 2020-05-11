import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, emphasize } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { v4 as uuidv4 } from 'uuid';

function ArtistSearchRender({ artistSearch }){

    const [artistRequest, changeArtistRequest] = useState('')
    const [dates, setDates] = useState([]);

    const SK_API_ARTISTDATES = 'https://api.songkick.com/api/3.0/artists/'
    const SK_API_ARTISTSEARCH = `https://api.songkick.com/api/3.0/search/artists.json?apikey=E3ZwjI3B1GSjGTe1&query=${artistRequest}`

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
        const searchReq = await axios.get(`${SK_API_ARTISTSEARCH}`);
        let artistId = searchReq.data.resultsPage.results.artist[0].id;

        const searchRet = await axios.get(`${SK_API_ARTISTDATES}${artistId}/calendar.json?apikey=E3ZwjI3B1GSjGTe1`)
        let  artistDates = searchRet.data.resultsPage.results.event;

        setDates(artistDates);  
        
        console.log(artistDates);
      }
     reqGet();
    }
    , [artistRequest]);

    const renderDates = dates.slice(0,10).map(d =>(

      <Card key = { uuidv4() } className = {classes.root} variant = 'outlined' style = {{boxShadow: '5px 10px 8px'}}>
        <CardContent variant='outlined'>
          <Typography variant = 'h6'>
           {d.displayName}
          </Typography>
  
  
  
          <Typography>
           {d.venue.displayName}
          </Typography>
         <hr></hr>
         <Typography>
          <a href={d.uri}>More Info</a>
         </Typography>
        </CardContent>
      </Card>
    ))


    return(
    
      <>
        <Button variant="contained" color="primary" onClick={ () => changeArtistRequest(artistSearch)}>
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

export default ArtistSearchRender;