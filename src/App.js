import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegionSearch from './Comps/RegionSearch';
import ArtistSearch from './Comps/ArtistSearch';
import MainComp from './Comps/MainComp';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';

function App() {
  return (
    <div className="App">

      <AppBar color = 'primary' position = 'static' style = {{height : '64px'}}>
        <Toolbar>
          <Typography variant="h4" color="inherit" style={{marginRight: '1.5rem'}}>
            ShowSeeker
          </Typography>
          <Typography variant="h6" color="inherit">
            Find gigs for your area and favourite acts!
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
                <div>
                    <ul>
                     <li>
                         <Link to='/artists'>
                            <Button variant="contained" color="primary">
                              Search Artists/Bands
                            </Button>
                         </Link>
                     </li>
                     <li>
                         <Link to='/area'>
                            <Button variant="contained" color="secondary">
                              Search Cities/Areas
                            </Button>
                         </Link>
                     </li>
                    </ul>
                </div>

            <Switch>
                <Route exact path='/'>
                    <MainComp />
                </Route>
                <Route exact path='/artists'>
                    <ArtistSearch />
                </Route>
                <Route exact path='/area'>
                    <RegionSearch />
                </Route>
            </Switch>
             
        </Router>


      {/* <MainComp></MainComp> */}
      
    </div>
  );
}

export default App;
