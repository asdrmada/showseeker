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
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';

function App() {

  const useStyles = makeStyles({
    spacing: {
      marginTop: 20,
      marginBottom: 20
    }
  })

  const classes = useStyles();

  return (
  <>
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

      
      <ul className="background-slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <Router>
                    <div className = {classes.spacing}>
                         <Link to='/artists'>
                            <Button variant="contained" color="primary">
                              Search Artists/Bands
                            </Button>
                         </Link>
              
                         <Link to='/area'>
                            <Button variant="contained" color="secondary">
                              Search Cities/Areas
                            </Button>
                         </Link>
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

    </div>
  </>

  );
}

export default App;
