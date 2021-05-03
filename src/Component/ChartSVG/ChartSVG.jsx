import React from 'react'; 

function ChartSVG(props) { 
    
    return ( 
        <svg viewBox="0 0 40 36" width="40" height="44" xmlns="http://www.w3.org/2000/svg">
            <circle 
                stroke="#00000088"
                strokeWidth="6" 
                fill="#00000088" cx="20" 
                cy="20" 
                r="15.91549431" />
            <circle 

            stroke={props.value > 50 ? "#e4e4e4" : "#ffcf22"} 
            strokeWidth="6" 
            strokeDasharray={props.value+",100"}  
            fill="#00000088" 
            cx="20" 
            cy="20" 
            r="15.91549431" />

            <text x="20" y="20" alignmentBaseline="central" fill="white" textAnchor="middle" fontSize="12">{props.value+"%"}</text>
        </svg> 
    );
}

export default ChartSVG;