import React from 'react';
import { useParams } from 'react-router';



function Details() {
    let { id } = useParams();
    return (
        <>
            <h1>Id là : {id}</h1>   
        </>
    );
}

export default Details;