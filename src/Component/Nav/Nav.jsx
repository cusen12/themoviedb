import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; 
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import TvSharpIcon from '@material-ui/icons/TvSharp';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux'; 
import Language from '../../Component/Language/Language';
import Login from '../Login/Login';
function Nav() {
    const langData = useSelector(state=>state.language.value.menu); 
    return (
        <>
        
            
            <nav className="nav">
                <Language/>
               
                <ul>
                <Login/> 
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
               
            </nav>
        </>
    );
}

export default Nav;