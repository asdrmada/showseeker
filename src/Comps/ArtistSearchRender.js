import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { v4 as uuidv4 } from 'uuid';

function ArtistSearchRender({ artistSearch }){

    const [artistRequest, changeArtistRequest] = useState('')
    const [dates, setDates] = useState([]);

    const SK_API_ARTISTDATES = 'https://api.songkick.com/api/3.0/artists/'
    const SK_API_ARTISTSEARCH = `https://api.songkick.com/api/3.0/search/artists.json?apikey=E3ZwjI3B1GSjGTe1&query=${artistRequest}`

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

    const renderDates = dates.map(d =>(
        <Card>
          <CardContent variant='outlined' key = { uuidv4() }>
            <h1>{d.displayName}</h1>
          </CardContent>
        </Card>
    ))


    return(
    
      <>
        <Button variant="contained" color="secondary" onClick={ () => changeArtistRequest(artistSearch)}>
          Search here!
        </Button>


        <h5>{artistRequest}</h5>

        {renderDates}
      </>

    )
}

export default ArtistSearchRender;