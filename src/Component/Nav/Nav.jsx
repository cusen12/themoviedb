import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; 
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import TvSharpIcon from '@material-ui/icons/TvSharp';
import { Button, Container, Grid, Toolbar } from '@material-ui/core';
import { useSelector } from 'react-redux';    
import { Suspense } from 'react';
import AppBar from '@material-ui/core/AppBar';


const Language = React.lazy(()=> import('../../Component/Language/Language')); 
const Login = React.lazy(()=> import('../Login/Login')); 

function Nav() {
    const langData = useSelector(state=>state.language.value.menu); 
    return (
        <>
            
            <Suspense fallback={<div>Loading...</div>}>  
                
                    <AppBar position="sticky" className="nav"> 
                        <Toolbar>
                        <Container> 
                            <Grid container
                            justify="space-between" 
                            alignContent="center"
                            spacing={2}> 
                                <Grid item md={10}>
                                    <ul>
                                        
                                        <li>
                                            <Link to="/"><Button variant="text" size="large" startIcon={<HomeOutlinedIcon/>}>{langData.home}</Button> </Link>
                                        </li>
                                        <li>
                                            <Link to="/movie"><Button variant="text" size="large" startIcon={<VideocamSharpIcon/>}>{langData.movie}</Button> </Link>
                                        </li> 
                                        <li>
                                            <Link to="/tvshow"><Button variant="text" size="large" startIcon={<TvSharpIcon/>}>{langData.tvShow}</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/people"><Button variant="text" size="large" startIcon={<PeopleOutlineOutlinedIcon/>}>{langData.people}</Button></Link>
                                        </li>   
                                    </ul>
                                </Grid>
                                <Grid item md={2}>
                                    <Language/> 
                                    <Login/>
                                </Grid>
                                
                            </Grid>
                        </Container>
                        </Toolbar>
                    </AppBar>
                
            </Suspense>
            
        </>
    );
}

export default Nav;