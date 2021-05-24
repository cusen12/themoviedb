import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemLists from '../../Component/ItemLists/ItemLists';

function WatchListMovie() {  
    const [detailID, setDetailID] = useState();
    const [watchList, setWatchList] = useState(); 
    const [page, setPage ] =useState(2)
    const [totalPage, setTotalPage ] = useState()
    const sectionId = useSelector(state => state.section.value.session_id); 
    useEffect(()=>{
        const getUserName = async () =>{
            const linkUser = `https://api.themoviedb.org/3/account?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}`;
            const respondUser = await fetch(linkUser);
            const respondUserJson = await respondUser.json(); 
            setDetailID(respondUserJson.id) 
        }   
        getUserName()

        const getWatchList = async () =>{ 
            const linkWatchList = `https://api.themoviedb.org/3/account/${detailID}/watchlist/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=1`;
            const respondWatchList = await fetch(linkWatchList);
            const respondWatchListJson = await respondWatchList.json();
            setWatchList(respondWatchListJson.results) 
            setTotalPage(respondWatchListJson.total_pages) 
        }   
        getWatchList() 
    },[sectionId,detailID]) 
    const handleClickLoadmore = async ()=>{
        setPage(page + 1)
        const link = `https://api.themoviedb.org/3/account/${detailID}/watchlist/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=${page}`;
        const respond = await fetch(link);
        const respondJson = await respond.json();
        setWatchList(watchList.concat(respondJson.results))
      
    } 
    return (
        <Container>
            <Typography variant="h3">WATCH LIST MOVIE</Typography>
            <hr style={{width:"100%", display:"block"}} />
            <br/>
            <Grid item md={12}>
                {watchList !== undefined ? 
                    watchList.map((data)=>
                        <ItemLists key={data.id}
                        category={"movie"}
                        id={data.id} 
                        images={data.poster_path} 
                        title={data.title} 
                        destription={data.overview}/>):"loading..."} 
            </Grid>
            <br/>
            <Button onClick={handleClickLoadmore} disabled={page - 1 === totalPage ? true : false} fullWidth variant="contained" color="primary"><Typography color="secondary">Load more</Typography></Button>
        </Container>
    );
}

export default WatchListMovie;