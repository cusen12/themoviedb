import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Link, useHistory } from "react-router-dom";
import ChartSVG from '../ChartSVG/ChartSVG';
import { Skeleton } from '@material-ui/lab';


function ListMovie() {
    const [listMovie, setListMovie] = useState(); 
    const history = useHistory(); 
    const handleClickCard = (data, dataHref) =>{
        history.push("/details"+dataHref+"="+data);
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
                    <Grid item md={12}><Typography className="titleH4" variant="h4" align="center" component="h1" color="textSecondary" >The moment of relaxation</Typography></Grid>
                    <Grid item md={6} className="box-highlights">  
                        <img className="lazyload"
                            src={"https://image.tmdb.org/t/p/w45/"+listMovie[15].backdrop_path}
                            data-src={"https://image.tmdb.org/t/p/w780/"+listMovie[15].backdrop_path} alt=""/>  
                        <div className="content">
                            <Typography variant="h4" onClick={() => handleClickCard(listMovie[15].id,"movie")}>{listMovie[15].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[15].overview}
                            </Typography>
                        </div> 
                    </Grid>
                    <Grid item md={6}  className="box-highlights box-highlights2">  
                        <img className="lazyload"
                            src={"https://image.tmdb.org/t/p/w45/"+listMovie[10].backdrop_path}
                            data-src={"https://image.tmdb.org/t/p/w780/"+listMovie[10].backdrop_path} alt=""/>  
                        <div className="content">
                            <Typography variant="h4" onClick={() => handleClickCard(listMovie[10].id,"movie")}>{listMovie[10].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[10].overview}
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
            <Grid container spacing={2}
            justify="flex-start"
            direction="row" className="overflowScroll"> 
                 
                    {listMovie ? listMovie.map((data) =>
                        <Grid key={data.id} item sm={3}>
                            <Card>
                                <CardActionArea>
                                    <img className="lazyload"
                                    src={"https://image.tmdb.org/t/p/w45/"+data.backdrop_path}
                                    data-src={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path} alt={data.original_name}/>
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
                        </Grid>
                    ): ''} 
               
            </Grid>
            <Button variant="text" style={{marginTop: "20px"}} color="primary" ><Link to="/movie">View all</Link></Button>
        </>
    );
}

export default ListMovie;