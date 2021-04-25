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
        arrows:false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5, 
        responsive: [
            {
            breakpoint: 1824,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
            }
            },
            {
            breakpoint: 1624,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6, 
            }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4, 
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]  
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
                        <Card key={data.id}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={data.title}
                                height="140"
                                image={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path}
                                title={data.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id)}>
                                    {data.title}
                                </Typography>
                                <p>{data.release_date}</p> 
                                <p>{data.vote_average*10}</p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.overview}
                                </Typography>
                                </CardContent>
                            </CardActionArea> 
                        </Card>
                    ): ''} 
                </Slider>
            </Grid>
            <Button variant="text" color="primary" ><Link to="/movie">View all</Link></Button>
        </>
    );
}

export default ListMovie;