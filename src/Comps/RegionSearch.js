import React, { useState } from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import RegionSearchRender from './RegionSearchRender';

function RegionSearch() {

    const[regionSearch, changeRegionSearch] = useState('');

    return (
      
      <div className = 'region-search-body'>
      <>
        <FormControl>
          <form>
            <InputLabel htmlFor="my-input">Search here!</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type='text' 
            value={regionSearch} onChange={e => changeRegionSearch(e.target.value)}/>
            <FormHelperText id="my-helper-text">Type your city and country/state code, then click enter!</FormHelperText>
          </form>
        </FormControl>

        <RegionSearchRender  regionSearch = { regionSearch }/>
      </>
      </div>
    )
}

export default RegionSearch;