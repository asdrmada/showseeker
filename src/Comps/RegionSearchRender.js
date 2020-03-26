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
  const [dates, setDates] = useState([]);

  const SK_API_LOCALSEARCH = `https://api.songkick.com/api/3.0/search/locations.json?query=`
// const SK_API_LOCATIONDATES = 'https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey=E3ZwjI3B1GSjGTe1'

  useEffect( () => {
    async function reqGet() {
      const searchReq = await axios.get(`${SK_API_LOCALSEARCH}${regionRequest}&apikey=E3ZwjI3B1GSjGTe1`);
      let regRet = searchReq.data.resultsPage.results.location

      setLocationChoices(regRet); 
      
      console.log(regRet);
      console.log(locationChoices);
    }
   reqGet();
  }
  , [regionRequest]);

  const renderRegions = locationChoices.slice(0,5).map(l =>(
    <Card>
      <CardContent variant='outlined' key = { uuidv4() }>
        <h6>{l.city.displayName}</h6>
       <p>{l.city.country.displayName}</p>
      </CardContent>
    </Card>
))

    return(
      <>
        <Button variant="contained" color="secondary" onClick={() => changeRegionRequest(regionSearch)}>
          Search here!
        </Button>


        {renderRegions}
      </>
    )
}

export default RegionSearchRender;