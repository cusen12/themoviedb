import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemLists from '../../Component/ItemLists/ItemLists';

function FavoriteListMovie() {  
    const [detailID, setDetailID] = useState();
    const [FavoriteList, setFavoriteList] = useState(); 
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

        const getFavoriteList = async () =>{ 
            const linkFavoriteList = `https://api.themoviedb.org/3/account/${detailID}/favorite/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=1`;
            const respondFavoriteList = await fetch(linkFavoriteList);
            const respondFavoriteListJson = await respondFavoriteList.json();
            setFavoriteList(respondFavoriteListJson.results) 
            setTotalPage(respondFavoriteListJson.total_pages) 
        }   
        getFavoriteList() 
    },[sectionId,detailID]) 
    const handleClickLoadmore = async ()=>{
        setPage(page + 1)
        const link = `https://api.themoviedb.org/3/account/${detailID}/favorite/movies?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&session_id=${sectionId}&sort_by=created_at.asc&page=${page}`;
        const respond = await fetch(link);
        const respondJson = await respond.json();
        setFavoriteList(FavoriteList.concat(respondJson.results))
      
    } 
    return (
        <Container>
            <Typography variant="h3">FAVORITE LIST MOVIE</Typography>
            <hr style={{width:"100%", display:"block"}} />
            <br/>
            <Grid item md={12}>
                {FavoriteList !== undefined ? 
                    FavoriteList.map((data)=>
                        <ItemLists key={data.id}
                        listname="favorite"
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

export default FavoriteListMovie;