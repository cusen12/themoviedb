import { Button, Grid } from '@material-ui/core';
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
 

function ToTop() {

    const style={
        position:"fixed",
        bottom:"50px",
        right:"20px",
        zIndex:"100",
        
    } 
    return (
        <Grid style={style}>
            <Button variant="contained" onClick={() =>  window.scrollTo(0, 0)} color="primary"><ArrowUpwardIcon color="secondary"/></Button>
        </Grid>
    );
}

export default ToTop;