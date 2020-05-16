import React from 'react';
import './MainComp.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';


function MainComp() {

    const useStyles = makeStyles({
        title: {
          fontSize: 40
        },
        subtitle: {
          fontSize: 25
        }
      })

    const classes = useStyles();

        return (

         <>
           <div className = 'mc-background'>
            <div>
                <Typography className = {classes.title}>
                   <h1  id = 'main-title'>ShowSeeker</h1>
                </Typography>
                <Typography className = {classes.subtitle}>
                   <h3  id = 'sub-title'>Find your next gig!</h3>
                </Typography>
            </div>

            <div>
              <footer>
                Alex Newman, 2020
              </footer>
              <footer>
                powered by <a href = 'https://www.songkick.com/'>Songkick</a>
              </footer>
            </div>
          </div>
        </>

        )
    }

export default MainComp
