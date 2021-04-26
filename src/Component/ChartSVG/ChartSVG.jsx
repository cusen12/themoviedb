import React from 'react'; 

function ChartSVG(props) { 
    
    return (
        <>
            <svg viewBox="0 0 40 36" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    stroke="#ccc"
                    strokeWidth="4" 
                    fill="#00000077" cx="20" 
                    cy="20" 
                    r="15.91549431" />
                <circle 

                stroke={props.value > 50 ? "rgb(32 133 191)" : "#ffcf22"} 
                strokeWidth="3" 
                strokeDasharray={props.value+",100"} 
                strokeLinecap="round" 
                fill="none" 
                cx="20" 
                cy="20" 
                r="15.91549431" />

                <text x="20" y="20" alignmentBaseline="central" fill="white" textAnchor="middle" fontSize="12">{props.value+"%"}</text>
            </svg>
        </>
    );
}

export default ChartSVG;