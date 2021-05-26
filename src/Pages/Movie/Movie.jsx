import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { useHistory } from "react-router-dom"; 
import "./movie.scss"  
import Pagination from '@material-ui/lab/Pagination'; 
import { Suspense } from 'react';
import More from '../../Component/More/More';

const ChartSVG = React.lazy(()=> import('../../Component/ChartSVG/ChartSVG')); 

function ListMovie() { 
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [listMovie, setListMovie] = useState();
    const [category, setCategory] = useState("now_playing");
    const [title, setTitle]= useState("Now Playing")
    const linkAPI= `https://api.themoviedb.org/3/movie/${category}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=${page}`
    const history = useHistory();
    const handleClickCard = (data, dataHref) =>{
        history.push("/category/"+dataHref+"/"+data);
    } 
    const handleChangeValuePagination = (e) =>{
        setPage(e.target.textContent)  
    } 
    const handleClickbutton = async (e) =>{ 
        const dataCategory = e.currentTarget.attributes['datatype'].value
        const dataTitle = e.currentTarget.attributes['alt'].value
        await setCategory(dataCategory) 
        await setTitle(dataTitle) 
        setPage(1)  
    }
    useEffect(() => {
        const getListMovie = async () => { 
            const link = linkAPI;
            const respond = await fetch(link);
            const respondJson = await respond.json(); 
            setTotalPage(respondJson.total_pages)
            setListMovie(respondJson.results)
        }
        getListMovie()
    },[linkAPI])
   
 
    const style={
        position: "relative"
    }  
    return (
        <> 
            <Container className="movie">
                 <Grid container className="category-title"
                    justify="space-between" 
                    alignContent="flex-start"
                    spacing={2}>
                    <Grid item md={3} onClick={handleClickbutton} datatype="popular" alt="Popular">
                        <img className="lazyload" data-sizes="auto" 
                        src="https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg" 
                        data-src="https://image.tmdb.org/t/p/w300//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg" alt="Popular"/>
                        <Typography variant="h4">Popular</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="top_rated" alt="Top Rated">
                        <img className="lazyload" data-sizes="auto" 
                        src="https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
                        data-src="https://image.tmdb.org/t/p/w300//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg" alt="Top Rated"/>
                        <Typography variant="h4">Top Rated</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="now_playing" alt="Now Playing" >
                        <img className="lazyload" data-sizes="auto" 
                        src="https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
                        data-src="https://image.tmdb.org/t/p/w300//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"  alt="Now Playing"/>
                        <Typography variant="h4">Now Playing</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="upcoming" alt="Upcoming">
                        <img className="lazyload" data-sizes="auto" 
                        src="https://image.tmdb.org/t/p/w45//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
                        data-src="https://image.tmdb.org/t/p/w300//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg" alt="Upcoming"/>
                        <Typography variant="h4">Upcoming</Typography>
                    </Grid>
                </Grid> 
                <Typography variant="h4" className="titleH4" color="primary">{title}</Typography>
                <hr/>
                <br/>
                <Grid container
                justify="flex-start" 
                alignContent="flex-start"
                spacing={2}> 
                    {listMovie ? listMovie.map((data) =>
                        <Grid item sm={3} key={data.id}>
                            <Card>
                                <CardActionArea> 
                                    <More id={data.id}/>
                                    <img className="lazyload" style={{maxHeight:"169px"}}  
                                    data-src={data.backdrop_path ? "https://image.tmdb.org/t/p/w300/"+data.backdrop_path : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}
                                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                    alt={data.title}/>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id,"movie")}>
                                        {data.title}
                                    </Typography>
                                    <p>{data.release_date}</p> 
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ChartSVG value={data.vote_average*10} />
                                    </Suspense>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {data.overview}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea> 
                            </Card>
                        </Grid>
                    ): ''}   
                </Grid> 
                <div style={style} className="pagination">
                    <Pagination count={totalPage} page={parseInt(page)} color="secondary" onChange={handleChangeValuePagination}/> 
                </div>
            </Container>
        </>
    );
}

export default ListMovie;