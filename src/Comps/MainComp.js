import React, { Component, useState } from 'react';
import axios from 'axios';
import RegionSearch from './RegionSearch';
import ArtistSearch from './ArtistSearch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class MainComp extends Component {

    render() {
        return (

         <>
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

                <RegionSearch />

        </>

        )
    }
}

export default MainComp
