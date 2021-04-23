import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function TVShow() {
    return (
        <>
           <Grid container item md={12}>
                <Typography variant="h2" color="secondary" align="right">TV Show</Typography>
            </Grid>
            <Grid container item md={12} className="bg-home">
                 
            </Grid>
        </>
    );
}

export default TVShow;