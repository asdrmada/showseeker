import React, { useState } from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core'; 
import RegionSearchRender from './RegionSearchRender';

function RegionSearch() {

    const[regionSearch, changeRegionSearch] = useState('');

    return (

      <>
        <FormControl>
          <form>
            <InputLabel htmlFor="my-input">Search here!</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type='text' 
            value={regionSearch} onChange={e => changeRegionSearch(e.target.value)}/>
            <FormHelperText id="my-helper-text">Find a gig in your area here!</FormHelperText>
          </form>
        </FormControl>

        <RegionSearchRender  regionSearch = { regionSearch }/>
      </>
    )
}

export default RegionSearch;