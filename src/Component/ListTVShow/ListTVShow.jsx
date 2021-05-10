import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Link, useHistory } from "react-router-dom"; 
const ChartSVG = React.lazy(()=> import('../ChartSVG/ChartSVG')); 

function ListMovie() {
    const [listMovie, setListMovie] = useState();
    const history = useHistory(); 
    const handleClickCard = (data, dataHref) =>{
        history.push("/category"+dataHref+"/"+data);
    }
    useEffect(() => {
        const getListMovie = async () => {
            const link = 'https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=2';
            const respond = await fetch(link);
            const respondJson = await respond.json(); 
            setListMovie(respondJson.results)
        }
        getListMovie()
    },[])
    return (
        <>   
            <Typography variant="h4" className="titleH4" color="primary">TOP TV Show <Button variant="text" style={{float: "right"}}><Link to="/tvshow">View all</Link></Button></Typography> 
            
            <Grid container spacing={2}
            justify="flex-start"
            direction="row" className="overflowScroll"> 
                {listMovie ? listMovie.map((data) =>
                    <Grid key={data.id} item sm={2}>
                        <Card> 
                            <img className="lazyload"
                            src={"https://image.tmdb.org/t/p/w45/"+data.backdrop_path}
                            data-src={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path} alt={data.original_name}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id, "tv")}>
                                {data.original_name}
                            </Typography>
                            <Typography component="p" >
                                {data.first_air_date}
                            </Typography> 
                            <Suspense fallback={<div>Loading...</div>}> 
                                <ChartSVG value={data.vote_average*10}/>
                            </Suspense>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.overview}
                            </Typography>
                            </CardContent> 
                        </Card>
                    </Grid>
                ): ''}  
            </Grid>
            <br/>
            <hr/> 
            
        </>
    );
}

export default ListMovie;