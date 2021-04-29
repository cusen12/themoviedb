import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; 

function Footer() {
    const langData = useSelector(state=>state.reducer.value.footer);
    return (
        <> 
            <Grid className="footer" >
                <Container>
                    <Typography variant="h4">{langData.contact}</Typography>  
                    <ul>
                        {langData.links.map((data, index)=>
                            <li data={data.typeLink} key={index}><Link to={data.link}>{data.text}</Link></li>  
                        )} 
                    </ul>  
                </Container> 
            </Grid>  
        </>
    );
}

export default Footer;