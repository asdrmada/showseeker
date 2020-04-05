import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { v4 as uuidv4 } from 'uuid';

function RegionSearchRender({ regionSearch }){

  const [regionRequest, changeRegionRequest] = useState('')
  const [locationChoices, setLocationChoices] = useState([]);
  // const [locationCode, setLocationCode] = useState('');
  const [dates, setDates] = useState([]);

  const SK_API_LOCALSEARCH = `https://api.songkick.com/api/3.0/search/locations.json?query=`
  const SK_API_LOCATIONDATES = 'https://api.songkick.com/api/3.0/metro_areas'

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
      setDates(locDates);
      console.log(dates);
    }
   reqGet();
  }
  , [regionRequest]);

  const renderDates = dates.slice(0,5).map(l =>(
    <Card key = { uuidv4() }>
      <CardContent variant='outlined'>
        <h6>{l.displayName}</h6>
        <p>{l.venue.displayName}</p>
      </CardContent>
    </Card>
))

    return(
      <>
        <Button variant="contained" color="secondary" onClick={() => changeRegionRequest(regionSearch)}>
          Search here!
        </Button>

        {/* <h1>{locationChoices.metroArea.displayName}</h1> */}

        {renderDates}
      </>
    )
}

export default RegionSearchRender;