import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick"; 
import { Link, useHistory } from "react-router-dom";
import ChartSVG from '../ChartSVG/ChartSVG';
import { Skeleton } from '@material-ui/lab';


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
    const handleClickCard = (data, dataHref) =>{
        history.push("/details"+dataHref+"="+data)
    }
    useEffect(() => {
        const getListMovie = async () => {
            const link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US';
            const respond = await fetch(link);
            const respondJson = await respond.json();  
            await setListMovie(respondJson.results) 

        }
        getListMovie()
    },[]) 
    return (
        
        <>    

            {
                (listMovie !== undefined) ?
                
                <Grid container 
                justify="space-between"
                alignItems="flex-start"
                spacing={4}>
                    <Grid item md={12}><Typography className="titleH4" variant="h4" align="center" component="h1" color="textSecondary" >Yeahhhh !!! The moment of relaxation has come</Typography></Grid>
                    <Grid item md={6} className="box-highlights">  
                        <img src={"https://image.tmdb.org/t/p/w780/"+listMovie[10].backdrop_path} alt=""/>  
                        <div className="content">
                            <Typography variant="h4">{listMovie[10].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[10].overview}
                            </Typography>
                        </div> 
                    </Grid>
                    <Grid item md={6}  className="box-highlights box-highlights2">  
                        <img src={"https://image.tmdb.org/t/p/w780/"+listMovie[12].backdrop_path} alt=""/>  
                        <div className="content">
                            <Typography variant="h4">{listMovie[12].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[12].overview}
                            </Typography>
                        </div> 
                    </Grid> 
                </Grid>
                : 
            <Skeleton variant="rect" width={210} height={118}/>
            }
            <br/>
            <Typography variant="h4" className="titleH4" color="primary">TOP Movie</Typography>
            <hr/>
            <br/>
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
                                <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id,"movie")}>
                                    {data.title}
                                </Typography>
                                <p>{data.release_date}</p> 
                                <ChartSVG value={data.vote_average*10} />
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