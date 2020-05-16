import React, { useState } from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import './ArtistSearch.css'
import ArtistSearchRender from './ArtistSearchRender';

// const SK_API_ARTISTDATES = 'https://api.songkick.com/api/3.0/artists//calendar.json?apikey=E3ZwjI3B1GSjGTe1'
// const SK_API_ARTISTSEARCH = `https://api.songkick.com/api/3.0/search/artists.json?apikey=E3ZwjI3B1GSjGTe1&query=${artistSearch}`

function ArtistSearch() {
  const[artistSearch, changeArtistSearch] = useState('');

  return (

    <>
      <FormControl>
        <form>
          <InputLabel htmlFor="my-input">
            <span className = 'search-handle'>Enter here!</span>
          </InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type='text' 
          value={artistSearch} onChange={e => changeArtistSearch(e.target.value)}
           />
          <FormHelperText id="my-helper-text">
            <span className = 'search-help'>Type your band/artist here, then click enter!</span>
          </FormHelperText>
        </form>
      </FormControl>
    
      <ArtistSearchRender artistSearch={ artistSearch } />
    </>
  )
}

export default ArtistSearch;