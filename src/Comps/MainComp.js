import React, { Component, useState } from 'react';
import axios from 'axios';
import RegionSearch from './RegionSearch';
import ArtistSearch from './ArtistSearch';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class MainComp extends Component {

    render() {
        return (
            <Paper
            style = {{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}      
            elevation = {0}
            >
            
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
                <h1>Main Component</h1>
                <RegionSearch />

                {/* <ArtistSearch /> */}
            </Paper>
        )
    }
}

export default MainComp
