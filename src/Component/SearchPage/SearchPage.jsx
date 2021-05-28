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
    const [movieData, setMovieData] = useState()
    const [tvData, setTVData] = useState()
    const [peopleData, setPeopleData] = useState()
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(); 

    const [movideVisible, setMovideVisible] = useState(false)
    const [tvVisible, setTVVisible] = useState(true)
    const [peopleVisible, setPeopleVisible] = useState(true)  
    const handleClickCard = (data, dataHref) =>{
        history.push("/category/"+dataHref+"/"+data);
    }  
    const handleClickMovie = async () =>{  
        const linkMovie = `https://api.themoviedb.org/3/search/movie?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=${page}&include_adult=false`
        const data = await fetch(linkMovie);
        const dataJson = await data.json() 
        setMovieData(dataJson)  
        setTotalPage(dataJson.total_pages) 
        setMovieData(dataJson)  
        setMovideVisible(false)
        setTVVisible(true)
        setPeopleVisible(true) 
        setPage(1)  
        setTotalPage(movieData.total_pages)
    }
    const handleClickTv = async () =>{   
        const linkTv = `https://api.themoviedb.org/3/search/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=${page}&query=${param}&include_adult=false`
        const dataTV = await fetch(linkTv);
        const dataTVJson = await dataTV.json()  
        setTVData(dataTVJson)  
        setMovideVisible(true)
        setTVVisible(false)
        setPeopleVisible(true) 
        setPage(1)
        setTotalPage(tvData.total_pages) 
    }
    const handleClickPeople = async () =>{
        const linkPeople = `https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=${page}&include_adult=false`
        const dataPeople = await fetch(linkPeople);
        const dataPeopleJson = await dataPeople.json()  
        setPeopleData(dataPeopleJson)  
        setMovideVisible(true)
        setTVVisible(true)
        setPeopleVisible(false) 
        setPage(1)  
        setTotalPage(peopleData.total_pages)
    } 
    const handleChangeValuePagination = (e) =>{
        setPage(parseInt(e.target.textContent))  
        console.log(page)
    } 
    useEffect(()=>{
        const renewData = async () =>{
            const linkPeople = `https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=${page}&include_adult=false`
            const dataPeople = await fetch(linkPeople);
            const dataPeopleJson = await dataPeople.json()  
            setPeopleData(dataPeopleJson)

            const linkTv = `https://api.themoviedb.org/3/search/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=${page}&query=${param}&include_adult=false`
            const dataTV = await fetch(linkTv);
            const dataTVJson = await dataTV.json()  
            setTVData(dataTVJson)  
            
            const linkMovie = `https://api.themoviedb.org/3/search/movie?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=${page}&include_adult=false`
            const data = await fetch(linkMovie);
            const dataJson = await data.json() 
            setMovieData(dataJson)  
        }
        renewData()
    },[page,param])
    useEffect(()=>{
        const getdataParam = async () =>{
            if(param !== ""){ 

                const linkMovie = `https://api.themoviedb.org/3/search/movie?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=1&include_adult=false`
                const data = await fetch(linkMovie);
                const dataJson = await data.json() 
                setTotalPage(dataJson.total_pages) 
                setMovieData(dataJson)  

                const linkTv = `https://api.themoviedb.org/3/search/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1&query=${param}&include_adult=false`
                const dataTV = await fetch(linkTv);
                const dataTVJson = await dataTV.json()  
                setTVData(dataTVJson)  

                const linkPeople = `https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${param}&page=1&include_adult=false`
                const dataPeople = await fetch(linkPeople);
                const dataPeopleJson = await dataPeople.json()  
                setPeopleData(dataPeopleJson)  
            }
        }
        getdataParam()
    },[param]) 

    
    const style={
        position: "relative"
    } 
    const handleClickDetailPeople = (id)=>{
        console.log(id)
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
                        <Grid item xs={6} md={2} onClick={handleClickMovie} datatype="movie" alt="Movie">
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg" 
                            src="https://image.tmdb.org/t/p/w300//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg" alt="movie"/>
                            <Typography variant="h4">Movie<i>{movieData !== undefined ? "("+movieData.total_results+")" : ""}</i></Typography>
                        </Grid>
                        <Grid item xs={6} md={2} onClick={handleClickTv} datatype="tv-show" alt="TV Show">
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
                            src="https://image.tmdb.org/t/p/w300//6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" alt="TV Show"/>
                            <Typography variant="h4">TV Show<i>{tvData !== undefined ? "("+tvData.total_results+")" : ""}</i></Typography>
                        </Grid>
                        <Grid item xs={6} md={2} onClick={handleClickPeople} datatype="people" alt="People" >
                            <img className="lazyload" data-sizes="auto" 
                            data-src="https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
                            src="https://image.tmdb.org/t/p/w300//ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg" alt="People"/>
                            <Typography variant="h4">People<i>{peopleData !== undefined ? "("+peopleData.total_results+")" : ""}</i></Typography>
                        </Grid> 
                    </Grid>
                <Grid container item md={12}
                    justify="flex-start" 
                    alignContent="flex-start"
                    spacing={2}> 
                        {
                            movieData !== undefined ? movieData.results.map((data) =>
                            <Grid item sm={3} key={data.id} hidden={movideVisible}>
                                <Card>
                                    <CardActionArea> 
                                        <img className="lazyload" style={{maxHeight:"159px",objectFit:"cover",width:"100%"}}  
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
                <Grid container item md={12}
                    justify="flex-start" 
                    alignContent="flex-start"
                    spacing={2}> 
                        {
                            tvData !== undefined ? tvData.results.map((data) =>
                            <Grid item sm={3} key={data.id} hidden={tvVisible}>
                                <Card>
                                    <CardActionArea> 
                                        <img className="lazyload" style={{maxHeight:"159px",objectFit:"cover",width:"100%"}}  
                                        data-src={data.backdrop_path ? "https://image.tmdb.org/t/p/w300/"+data.backdrop_path : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}
                                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                        alt={data.original_name}/>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickCard(data.id,"tv")}>
                                            {data.original_name}
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
                <Grid container item md={12}
                    justify="flex-start" 
                    alignContent="flex-start"
                    spacing={2}> 
                        {
                            peopleData !== undefined ? peopleData.results.map((data) =>
                            <Grid item sm={3} key={data.id} hidden={peopleVisible}>
                                <Card>
                                    <CardActionArea> 
                                        <img className="lazyload" style={{maxHeight:"250px",objectFit:"cover",width:"100%"}}  
                                        data-src={data.profile_path ? "https://image.tmdb.org/t/p/w300/"+data.profile_path : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}
                                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                        alt={data.original_name}/>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" onClick={() => handleClickDetailPeople(data.id)}>
                                            {data.name}
                                        </Typography>
                                        <p>{data.release_date}</p>  
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