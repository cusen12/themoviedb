import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick"; 
import { Link, useHistory } from "react-router-dom";

function ListMovie() {
    const [listMovie, setListMovie] = useState();
    const history = useHistory();

    const settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,  
    };
    const handleClickCard = (data) =>{
        history.push("/details"+data)
    }
    useEffect(() => {
        const getListMovie = async () => {
            const link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US';
            const respond = await fetch(link);
            const respondJson = await respond.json(); 
            setListMovie(respondJson.results)
        }
        getListMovie()
    },[])
    return (
        <> 
            <Grid>
                <Slider {...settings}>
                    {listMovie ? listMovie.map((data) =>
                        <Card key={data.id} onClick={() => handleClickCard(data.id)}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={data.title}
                                height="140"
                                image={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path}
                                title={data.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.overview}
                                </Typography>
                                </CardContent>
                            </CardActionArea> 
                        </Card>
                    ): ''} 
                </Slider>
            </Grid>
            <Button variant="text"><Link to="/movie">View all</Link></Button>
        </>
    );
}

export default ListMovie;