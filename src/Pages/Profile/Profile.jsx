import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Profile.scss"

function Profile() {
    const [detail, setDetail] = useState();
    const [detailID, setDetailID] = useState();
    const [watchList, setWatchList] = useState();
    const [ratedList, setRatedList] = useState();
    const [favoriteList, setFavoriteList] = useState();
    const [watchListTV, setWatchListTV] = useState();
    const [ratedListTV, setRatedListTV] = useState();
    const [favoriteListTV, setFavoriteListTV] = useState(); 
    const sectionId = useSelector(state => state.section.value.session_id); 
    useEffect(()=>{
        const getUserName = async () =>{
            const linkUser = `https://api.themoviedb.org/3/account?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}`;
            const respondUser = await fetch(linkUser);
            const respondUserJson = await respondUser.json();
            setDetail(respondUserJson) 
            setDetailID(respondUserJson.id) 
        }   
        getUserName()

        const getWatchList = async () =>{ 
            const linkWatchList = `https://api.themoviedb.org/3/account/${detailID}/watchlist/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=1`;
            const respondWatchList = await fetch(linkWatchList);
            const respondWatchListJson = await respondWatchList.json();
            setWatchList(respondWatchListJson) 
        }   
        getWatchList()

        const getRatedList = async () =>{
            const linkRatedList = `https://api.themoviedb.org/3/account/${detailID}/rated/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=1`;
            const respondRatedList = await fetch(linkRatedList);
            const respondRatedListJson = await respondRatedList.json();
            setRatedList(respondRatedListJson) 
        }   
        getRatedList()

        const getFavoriteList = async () =>{
            const linkFavoriteList = `https://api.themoviedb.org/3/account/${detailID}/favorite/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}&language=en-US&sort_by=created_at.asc&page=1`;
            const respondFavoriteList = await fetch(linkFavoriteList);
            const respondFavoriteListJson = await respondFavoriteList.json();
            setFavoriteList(respondFavoriteListJson) 
        }   
        getFavoriteList()

        const getWatchListTV = async () =>{
            const linkWatchListTV = `https://api.themoviedb.org/3/account/${detailID}/watchlist/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=1`;
            const respondWatchListTV = await fetch(linkWatchListTV);
            const respondWatchListTVJson = await respondWatchListTV.json();
            setWatchListTV(respondWatchListTVJson) 
        }   
        getWatchListTV()

        const getRatedListTV = async () =>{
            const linkRatedListTV = `https://api.themoviedb.org/3/account/${detailID}/rated/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}&language=en-US&sort_by=created_at.asc&page=1`;
            const respondRatedListTV = await fetch(linkRatedListTV);
            const respondRatedListTVJson = await respondRatedListTV.json();
            setRatedListTV(respondRatedListTVJson) 
        }   
        getRatedListTV()

        const getFavoriteListTV = async () =>{
            const linkFavoriteListTV = `https://api.themoviedb.org/3/account/${detailID}/favorite/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}&language=en-US&sort_by=created_at.asc&page=1`;
            const respondFavoriteListTV = await fetch(linkFavoriteListTV);
            const respondFavoriteListTVJson = await respondFavoriteListTV.json();
            setFavoriteListTV(respondFavoriteListTVJson) 
        }   
        getFavoriteListTV()
    },[sectionId,detailID]) 
    console.log("watchList",watchList) 
    console.log("ratedList",ratedList) 
    console.log("favoriteList",favoriteList) 
    console.log("watchListTV",watchListTV) 
    console.log("ratedListTV",ratedListTV) 
    console.log("favoriteListTV",favoriteListTV) 
    
    return (  
        <Container className="profile"><br/>
            {detail !== undefined ? 
                <Grid container justify="flex-start" alignItems="center" spacing={3}>
                    <Grid item>
                        { detail.avatar.tmdb.avatar_path !== null ?
                            <img style={{borderRadius:"50%"}}  
                            src={`https://www.themoviedb.org/t/p/w150_and_h150_face/${detail.avatar.tmdb.avatar_path}`} alt="" /> :
                            <AccountCircleRoundedIcon color="primary" style={{fontSize:"30px"}} />
                        } 
                    </Grid>
                    <Grid item>
                        <ul>
                            <li> 
                                <a href="#watchList">
                                    <Typography>Watchlist</Typography>
                                </a>
                            </li>
                            <li>
                                <a href="#ratedList">
                                    <Typography>Rated List</Typography>
                                </a>
                            </li>
                            <li>
                                <a href="#favoriteList">
                                    <Typography>Favorite List</Typography>
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            : <Typography>loading...</Typography>}
            <Typography variant="h4" color="primary">Watch list</Typography>

            <Grid id="watchList" container justify="flex-start" spacing={2}>
                
            </Grid>
            <Typography variant="h4" color="primary">Rated list</Typography>
            <Grid id="ratedList" container justify="flex-start" spacing={2}>
            
            </Grid>
            <Typography variant="h4" color="primary">Favorite list</Typography>
            <Grid id="favoriteList" container justify="flex-start" spacing={2}>
             
            </Grid>
        </Container> 
    );
}

export default Profile;