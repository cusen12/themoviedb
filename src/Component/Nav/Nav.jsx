import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; 
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import TvSharpIcon from '@material-ui/icons/TvSharp';
import { Button } from '@material-ui/core';
function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><Button variant="text" size="large" startIcon={<HomeOutlinedIcon/>}>HOME</Button> </Link>
                    </li>
                    <li>
                        <Link to="/Movie"><Button variant="text" size="large" startIcon={<VideocamSharpIcon/>}>MOVIE</Button> </Link>
                    </li> 
                    <li>
                        <Link to="/TVShow"><Button variant="text" size="large" startIcon={<TvSharpIcon/>}>TV SHOW</Button></Link>
                    </li>
                    <li>
                        <Link to="/People"><Button variant="text" size="large" startIcon={<PeopleOutlineOutlinedIcon/>}>PEOLLE</Button></Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;