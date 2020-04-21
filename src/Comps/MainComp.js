import React, { Component, useState } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RegionSearch from './RegionSearch';
import ArtistSearch from './ArtistSearch';
import Typography from '@material-ui/core/Typography';

export class MainComp extends Component {

    render() {
        return (

         <>
            <div>
                <Typography>
                   <h1>Showseeker</h1>
                </Typography>
                <Typography>
                   <h3>Find your next gig!</h3>
                </Typography>

            </div>

        {/* <Router>
                <div>
                    <ul>
                     <li>
                         <Link to='/'>Home</Link>
                     </li>
                     <li>
                         <Link to='/artists'>Search Artists</Link>
                     </li>
                     <li>
                         <Link to='/area'>Search for your Area</Link>
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
             
        </Router> */}



                {/* <ArtistSearch />

                <RegionSearch /> */}

        </>

        )
    }
}

export default MainComp
