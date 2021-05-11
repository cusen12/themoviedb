import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Link, useHistory } from "react-router-dom"; 
import { Skeleton } from '@material-ui/lab'; 
import { Suspense } from 'react';

const ChartSVG = React.lazy(()=> import('../ChartSVG/ChartSVG')); 

function ListMovie() {
    const [listMovie, setListMovie] = useState(); 
    const history = useHistory(); 
    const handleClickCard = (data, dataHref) =>{
        history.push("/category/"+dataHref+"/"+data);
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
                        <img className="lazyload" width="500px" height="350px"
                            src={"https://image.tmdb.org/t/p/w45/"+listMovie[15].backdrop_path}
                            data-src={"https://image.tmdb.org/t/p/w500/"+listMovie[15].backdrop_path} alt=""/>  
                        <Grid className="content">
                            <Typography variant="h4" onClick={() => handleClickCard(listMovie[15].id,"movie")}>{listMovie[15].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[15].overview}
                            </Typography>
                        </Grid> 
                    </Grid>
                    <Grid item md={6}  className="box-highlights box-highlights2">  
                        <img className="lazyload"  width="500px" height="350px"
                            src={"https://image.tmdb.org/t/p/w45/"+listMovie[10].backdrop_path}
                            data-src={"https://image.tmdb.org/t/p/w500/"+listMovie[10].backdrop_path} alt=""/>  
                        <Grid className="content">
                            <Typography variant="h4" onClick={() => handleClickCard(listMovie[10].id,"movie")}>{listMovie[10].title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                        {listMovie[10].overview}
                            </Typography>
                        </Grid> 
                    </Grid> 
                </Grid>
                : 
            <Skeleton variant="rect" width={210} height={118}/>
            }
            <br/> <br/>
            <Typography variant="h4" className="titleH4" color="primary">TOP Movie  <Button variant="text" style={{float: "right"}} color="primary" ><Link to="/movie">View all</Link></Button></Typography>
             
            <Grid container spacing={4}
            justify="flex-start"
            direction="row" className="overflowScroll"> 
                 
                    {listMovie ? listMovie.map((data) =>
                        <Grid key={data.id} item sm={3}>
                            <Card> 
                                <img className="lazyload" width="300px" height="169px"
                                src={"https://image.tmdb.org/t/p/w45/"+data.backdrop_path}
                                data-src={"https://image.tmdb.org/t/p/w300/"+data.backdrop_path} alt={data.original_name}/>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id,"movie")}>
                                    {data.title}
                                </Typography>
                                <Typography component="p" style={{fontSize: "14px"}}>
                                {data.release_date}
                                </Typography> 
                                <Suspense fallback={<div>Loading...</div>}> 
                                    <ChartSVG value={data.vote_average*10} />
                                </Suspense>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.overview}
                                </Typography>
                                </CardContent> 
                            </Card>
                        </Grid>
                    ): ''} 
               
            </Grid>
            <br/> <br/>
            <hr/> 
        </>
    );
}

export default ListMovie;