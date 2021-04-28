import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ChartSVG from '../../Component/ChartSVG/ChartSVG';
import Pagination from '@material-ui/lab/Pagination';

function TVShow() {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [listMovie, setListMovie] = useState();
    const [category, setCategory] = useState("now_playing");
    const [title, setTitle]= useState("Now Playing")
    const linkAPI= `https://api.themoviedb.org/3/tv/${category}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=${page}`
    const history = useHistory();
    const handleClickCard = (data, dataHref) =>{
        history.push("/details"+dataHref+"="+data)
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
                        <img src="https://image.tmdb.org/t/p/w300//b0WmHGc8LHTdGCVzxRb3IBMur57.jpg" alt="Popular"/>
                        <Typography variant="h4">Popular</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="top_rated" alt="Top Rated">
                        <img src="https://image.tmdb.org/t/p/w300//z59kJfcElR9eHO9rJbWp4qWMuee.jpg" alt="Top Rated"/>
                        <Typography variant="h4">Top Rated</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="on_the_air" alt="On The Air" >
                        <img src="https://image.tmdb.org/t/p/w300//uAjMQlbPkVHmUahhCouANlHSDW2.jpg"  alt="On The Air"/>
                        <Typography variant="h4">On The Air</Typography>
                    </Grid>
                    <Grid item md={3} onClick={handleClickbutton} datatype="airing_today" alt="Airing Today">
                        <img src="https://image.tmdb.org/t/p/w300//5VltHQJXdmbSD6gEJw3R8R1Kbmc.jpg" alt="Airing Today"/>
                        <Typography variant="h4">Airing Today</Typography>
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
                         <Grid item sm={3} key={data.id} onClick={() => handleClickCard(data.id, "tv")}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt={data.original_name}
                                    height="140"
                                    image={data.backdrop_path? "https://image.tmdb.org/t/p/w300/"+data.backdrop_path : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}
                                    title={data.original_name}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
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
                <div style={style} className="pagination">
                    <Pagination count={totalPage} page={parseInt(page)} color="secondary" onChange={handleChangeValuePagination}/> 
                </div>
            </Container>
        </>
    );
}

export default TVShow;