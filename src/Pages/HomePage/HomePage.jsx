import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './HomePage.scss';

function HomePage() {
    return (
        <> 
            <Grid container item md={12}>
                <Typography variant="h2" color="secondary" align="right">Home</Typography>
            </Grid>
            <Grid container item md={12} className="bg-home">
                 
            </Grid>
        </>
    );
}

export default HomePage;