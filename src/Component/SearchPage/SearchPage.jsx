import {Card, CardActionArea, CardContent, Container, Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'; 
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useHistory, useLocation } from "react-router-dom";  
import './SearchPage.scss';
 
const ChartSVG = React.lazy(()=> import('../ChartSVG/ChartSVG')); 
function SearchPage() { 
    const history = useHistory()
    const location = useLocation()
    const param = location.state.params;  
    const [movideData, setMovideData] = useState()
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(); 
      
    const handleClickCard = (data, dataHref) =>{
        history.push("/category/"+dataHref+"/"+data);
    }  
    const handleClickbutton = async (e) =>{  
        setPage(1)  
        console.log(page) 
    } 
    const handleChangeValuePagination = (e) =>{
        setPage(e.target.textContent)  
    } 
    useEffect(()=>{
        const getdataParam = async () =>{
            if(param !== ""){
                const linkMovie = `https://api.themoviedb.org/3/search/movie?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=${page}&include_adult=false`
                const data = await fetch(linkMovie);
                const dataJson = await data.json() 
                setTotalPage(dataJson.total_pages) 
                setMovideData(dataJson)  
            }
        }
        getdataParam()
    },[param,page]) 
    const style={
        position: "relative"
    }  
    return (
        <Container>
            <Grid container  className="searchPage" item md={12}
            justify="flex-start"
            alignItems="flex-start"
            spacing={4}
            >     
                    <Grid item md={12} container className="category-title"
                        justify="flex-start" 
                        alignContent="flex-start"
                        spacing={2}>
                        <Grid item md={2} onClick={handleClickbutton} datatype="movie" alt="Movie">
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg" 
                            src="https://image.tmdb.org/t/p/w300//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg" alt="movie"/>
                            <Typography variant="h4">Movie<i>(552)</i></Typography>
                        </Grid>
                        <Grid item md={2} onClick={handleClickbutton} datatype="tv-show" alt="TV Show">
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
                            src="https://image.tmdb.org/t/p/w300//6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" alt="TV Show"/>
                            <Typography variant="h4">TV Show<i>(5)</i></Typography>
                        </Grid>
                        <Grid item md={2} onClick={handleClickbutton} datatype="people" alt="People" >
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
                            src="https://image.tmdb.org/t/p/w300//ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg" alt="People"/>
                            <Typography variant="h4">People<i>(253)</i></Typography>
                        </Grid> 
                    </Grid>
                    <Grid container item md={12}
                    justify="flex-start" 
                    alignContent="flex-start"
                    spacing={2}> 
                        {
                            movideData !== undefined ? movideData.results.map((data) =>
                            <Grid item sm={3} key={data.id}>
                                <Card>
                                    <CardActionArea> 
                                        <img className="lazyload" style={{maxHeight:"169px",objectFit:"cover",width:"100%"}}  
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
                        ) : "loadding..."
                        } 
                </Grid>
                <div style={style} className="pagination">
                        <Pagination count={totalPage} page={parseInt(page)} color="secondary" onChange={handleChangeValuePagination}/> 
                </div>
            </Grid>
        </Container>
    );
}

export default SearchPage;