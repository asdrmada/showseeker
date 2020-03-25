import React, { useState } from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import ArtistSearchRender from './ArtistSearchRender';

// const SK_API_ARTISTDATES = 'https://api.songkick.com/api/3.0/artists//calendar.json?apikey=E3ZwjI3B1GSjGTe1'
// const SK_API_ARTISTSEARCH = `https://api.songkick.com/api/3.0/search/artists.json?apikey=E3ZwjI3B1GSjGTe1&query=${artistSearch}`

function ArtistSearch() {
  const[artistSearch, changeArtistSearch] = useState('');

  return (

    <>
      <FormControl>
        <form>
          <InputLabel htmlFor="my-input">Search here!</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type='text' 
          value={artistSearch} onChange={e => changeArtistSearch(e.target.value)}
           />
          <FormHelperText id="my-helper-text">Look for a band/artist here!</FormHelperText>
        </form>
      </FormControl>
    
      <ArtistSearchRender artistSearch={ artistSearch } />
    </>
  )
}

export default ArtistSearch;