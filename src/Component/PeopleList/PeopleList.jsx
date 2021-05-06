import { Button, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Link, useHistory } from "react-router-dom";  
import Slider from 'react-slick';

function ListMovie() {
    const [listMovie, setListMovie] = useState();
    const history = useHistory(); 
    const handleClickCard = (data, dataHref) =>{
        history.push("/details"+dataHref+"="+data)
    }
    useEffect(() => {
        const getListMovie = async () => {
            const link = 'https://api.themoviedb.org/3/person/popular?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1';
            const respond = await fetch(link);
            const respondJson = await respond.json();  
            setListMovie(respondJson.results)
        }
        getListMovie()
    },[])
    const style = {
        width: "100%",
        height: "250px",
        objectFit: "cover"
    }
    const stylep ={
        whiteSpace: "nowrap", 
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontSize:"14px"
    }
    const settings = {   
        className: "center", 
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500, 
        slidesPerRow: 2
      };
    return (
        <>    
            <Typography variant="h4" className="titleH4" color="primary">Popular People</Typography> 
            <hr/>
            <br/> 
            <Slider {...settings}>
                {listMovie ? listMovie.map((data) => 
                        <Card key={data.id} className="peopleCard"> 
                                <img className="lazyload" style={style}
                                src={"https://image.tmdb.org/t/p/w45/"+data.profile_path}
                                data-src={"https://image.tmdb.org/t/p/w300/"+data.profile_path} alt={data.name}/>
                                <CardContent style={{padding:"10px 20px"}}>
                                <Typography onClick={() => handleClickCard(data.id, "people")} style={{height:"auto"}} gutterBottom variant="h5" component="h2" >
                                    {data.name}
                                </Typography> 
                                {data.known_for.map((item) => 
                                <Typography key={item.id} style={stylep}  variant="body1">
                                    {item.original_title},
                                </Typography> 
                                )}
                                <Typography style={stylep} variant="body1">
                                    ...
                                </Typography> 
                                </CardContent> 
                        </Card> 
                ): ''}  
            </Slider> 
            <Button variant="text"><Link to="/people">View all</Link></Button>
        </>
    );
}

export default ListMovie;