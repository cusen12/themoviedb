import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick"; 
import { Link, useHistory } from "react-router-dom";
import ChartSVG from '../ChartSVG/ChartSVG';

function ListMovie() {
    const [listMovie, setListMovie] = useState();
    const history = useHistory();

    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
            breakpoint: 1824,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6, 
            }
            },
            {
            breakpoint: 1624,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
            <Grid>
                <Slider {...settings}>
                    {listMovie ? listMovie.map((data) =>
                        <Card key={data.id} onClick={() => handleClickCard(data.id, "tv")}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={data.original_name}
                                height="140"
                                image={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path}
                                title={data.original_name}
                                />
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
                    ): ''} 
                </Slider>
            </Grid>
            <Button variant="text"><Link to="/tvshow">View all</Link></Button>
        </>
    );
}

export default ListMovie;