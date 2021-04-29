import { Container, Typography } from '@material-ui/core';
import React from 'react';

function CommingSoon() {
    const style={
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    }
    return (
        <>
            <Container style={style}>
                <Typography variant="h1" align="center">Comming Soon</Typography>
            </Container>
        </>
    );
}

export default CommingSoon;