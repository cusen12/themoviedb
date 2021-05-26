import { Grid } from '@material-ui/core';
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
            <svg viewBox="0 0 40 36" width="40" height="44" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    stroke="#00000088"
                    strokeWidth="6" 
                    fill="#00000088" cx="20" 
                    cy="20" 
                    r="15.91549431" />
                <circle 

                stroke={makeColor()} 
                strokeWidth="6" 
                strokeDasharray={props.value+",100"}  
                fill="#00000088" 
                cx="20" 
                cy="20" 
                r="15.91549431" />

                <text x="20" y="20" alignmentBaseline="central" fill="white" textAnchor="middle" fontSize="12">{props.value+"%"}</text>
            </svg> 
        </Grid>
    );
}

export default ChartSVG;