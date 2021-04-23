import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function Movie() {
    return (
        <>
            <Grid container item md={12}>
                <Typography variant="h2" color="secondary" align="right">Movie</Typography>
            </Grid>
            <Grid container item md={12} className="bg-home">
                 
            </Grid>
        </>
    );
}

export default Movie;