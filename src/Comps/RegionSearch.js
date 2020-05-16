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
            <InputLabel htmlFor="my-input">
              <span className ='search-handle'>Enter here!</span>
            </InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type='text' 
            value={regionSearch} onChange={e => changeRegionSearch(e.target.value)}/>
            <FormHelperText id="my-helper-text">
              <span className = 'search-help'>Type your city and country/state code, then click enter!</span>
            </FormHelperText>
          </form>
        </FormControl>

        <RegionSearchRender  regionSearch = { regionSearch }/>
      </>
      </div>
    )
}

export default RegionSearch;