import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'; 

function ChartSVG(props) { 

    const style={
        position:"absolute",
        top:"30px",
        right:"18px",  
    }  
    const makeColor = () =>{  
        return props.value >= 20 ? (props.value >= 50 ? "#e4e4e4" : "#ffcf22") : "#a00505" 
    } 
    return ( 
        <Grid style={style}>
            <Box position="relative"> 
                 <Typography variant="subtitle1" style={{color:makeColor(),}} color="textSecondary">{props.value}%</Typography> 
            </Box>
        </Grid>
    );
}

export default ChartSVG;