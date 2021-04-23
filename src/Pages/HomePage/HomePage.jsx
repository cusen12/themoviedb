import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ListMovie from '../../Component/ListMovie/ListMovie';
import ListTVShow from '../../Component/ListTVShow/ListTVShow';
import './HomePage.scss';

function HomePage() {
    return (
        <> 
            <Container>
                <Grid container item md={12}>
                    <Typography variant="h2" color="secondary" align="right">Home</Typography>
                </Grid>
                <Grid item md={12} className="bg-home homepage"> 
                    <Typography variant="h4" color="primary">TV Show</Typography> 
                    <ListTVShow/>

                    <Typography variant="h4" color="primary">Movie</Typography>
                    <ListMovie/>
                </Grid>
            </Container>
        </>
    );
}

export default HomePage;