import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Link, useHistory } from "react-router-dom";
import ChartSVG from '../ChartSVG/ChartSVG';

function ListMovie() {
    const [listMovie, setListMovie] = useState();
    const history = useHistory(); 
    const handleClickCard = (data, dataHref) =>{
        history.push("/details"+dataHref+"="+data)
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
            <Typography variant="h4" className="titleH4" color="primary">TOP TV Show</Typography> 
            <hr/>
            <br/>
            <Grid container spacing={2}
            justify="flex-start"
            direction="row" className="overflowScroll"> 
                {listMovie ? listMovie.map((data) =>
                    <Grid key={data.id} item sm={2}>
                        <Card  onClick={() => handleClickCard(data.id, "tv")}>
                            <CardActionArea> 
                                <img className="lazyload"
                                src={"https://image.tmdb.org/t/p/w45/"+data.backdrop_path}
                                data-src={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path} alt={data.original_name}/>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {data.original_name}
                                </Typography>
                                <p>{data.first_air_date}</p> 
                                <ChartSVG value={data.vote_average*10}/>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.overview}
                                </Typography>
                                </CardContent>
                            </CardActionArea> 
                        </Card>
                    </Grid>
                ): ''}  
            </Grid>
            <Button variant="text" style={{marginTop: "20px"}}><Link to="/tvshow">View all</Link></Button>
        </>
    );
}

export default ListMovie;