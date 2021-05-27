import { Button, ButtonGroup, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import './DetailsTV.scss';  

import ChartSVG from '../../Component/ChartSVG/ChartSVG'; 
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'; 
import YouTubeIcon from '@material-ui/icons/YouTube';

import { Alert, Rating } from '@material-ui/lab';
import Slider from 'react-slick';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'; 
import LinkIcon from '@material-ui/icons/Link';

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { useSelector } from 'react-redux';



function DetailsTV() {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState();
    const [galleryData, setGalleryData] = useState(); 
    const [videoData, setVideoData] = useState(); 
    const [socialData, setSocialData] = useState();
    const [castData, setCastData] = useState();
    const [reviewData, setReviewData] = useState();
    const [recommentData, setRecommentData] = useState(); 
    const [rate, setRate] = useState(5); 
    const [hidden, sethidden] = useState(true); 
    const [visible, setVisible] = useState(true);  
    const style ={
        position: "absolute",
        top:"20px",
        right:"0"
    }
    const styleRate ={
        position: "absolute",
        top:"-12px",
        left:"0"
    }    
    const settings = {   
        className: "center", 
        infinite: false,
        centerPadding: "50px",
        slidesToShow: 8,
        speed: 500,  
        slidesToScroll: 1,
    };
    const settings2 = {   
        className: "center", 
        infinite: false,
        centerPadding: "50px",
        slidesToShow: 6,
        speed: 500,  
        slidesToScroll: 1,
    };  
    useEffect(()=>{
        const getDetails = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US`;
            const respond = await fetch(link);
            const responJson = await respond.json();
            setDetailsData(responJson);
        }
        getDetails(); 
        const getGallery = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/images?api_key=cd58c7bd131cba3c391d62c5fda2ae53`;
            const respondGallery = await fetch(link);
            const responGalleryJson = await respondGallery.json();
            setGalleryData(responGalleryJson);
        }
        getGallery(); 
        const getVideo = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US`;
            const respondVideo = await fetch(link);
            const responVideoJson = await respondVideo.json();
            setVideoData(responVideoJson);
        }
        getVideo(); 
        const getSocial = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=cd58c7bd131cba3c391d62c5fda2ae53`;
            const respondSocial = await fetch(link);
            const responSocialJson = await respondSocial.json();
            setSocialData(responSocialJson);
        }
        getSocial();
        const getCast = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US`;
            const respondCast = await fetch(link);
            const responCastJson = await respondCast.json();
            setCastData(responCastJson);
        }
        getCast();

        const getReview = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language&language=en-US&page=1`;
            const respondReview = await fetch(link);
            const responReviewJson = await respondReview.json();
            setReviewData(responReviewJson);
        }
        getReview();

        const getRecoment = async () =>{
            const link = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1`;
            const respondRecoment = await fetch(link);
            const responRecomentJson = await respondRecoment.json();
            setRecommentData(responRecomentJson);
        }
        getRecoment(); 
    },[id])  

    const fullDayMY = (date) =>{
        const d = new Date(date)
       return d.getDate()+ "-" + d.getMonth()+"-" + d.getFullYear() + " at " + d.getHours() + ":" + d.getMinutes()
    }
    const handleClickRate = () => {  
        sethidden(!hidden);
    }
    const handleAddfavorite = () => {   
        if(checkLogin === true){
            const addtoFavorite = async () =>{ 

                const dataToken = {
                    "media_type": "tv",
                    "media_id": id,
                    "favorite": true
                  } 
                fetch(`https://api.themoviedb.org/3/account/${idUser}/favorite?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToken),
                })
                .then(response => response.json())
                .then((data) => {
                    if(data.success){
                        setAlrHidden(false)
                        setTimeout(()=>{
                            setAlrHidden(true)
                        },2000) 
                    }  
                })
                .catch((error) => {
                    console.log('Error:', error); 
                });  
            }   
            addtoFavorite()
        }
        else{
            console.log("chưa đăng nhập")
        }
    }   
    const [alrHidden, setAlrHidden]= useState(true)  
   
       
    const sectionData = useSelector(state=>state.section.value);   
    const sectionId = sectionData.session_id
    const checkLogin = useSelector(state => state.login.value.success)
    const idUser = useSelector(state=>state.getIDLogin.value)
    const handleAddtoWatchlist = () => {    
        const addtoWatchList = async () =>{ 

            const dataToken = {
                "media_type": "tv",
                "media_id": id,
                "watchlist": true
                } 
            fetch(`https://api.themoviedb.org/3/account/${idUser}/watchlist?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=${sectionId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToken),
            })
            .then(response => response.json())
            .then((data) => {
                if(data.success){
                    setAlrHidden(false)
                    setTimeout(()=>{
                        setAlrHidden(true)
                    },2000) 
                }  
            })
            .catch((error) => {
                console.log('Error:', error); 
            });  
        }   
        addtoWatchList()
    } 
    const styleAlr={
        position: "fixed",
        width:"200px",
        top: "150px",
        right: "0",
        zIndex:"1000"
    }
    const handlesetRate = (event,newValue) =>{  
        setRate(newValue)  
        alert("Thanks to vote!!");
        sethidden(!hidden); 
    }      
    return ( 
        <Container className={"details-tv"}> 
         <Grid style={styleAlr}  hidden={alrHidden}>
            <Alert severity="success"> 
                Success!!!!!
            </Alert>
        </Grid>    
        {
            detailsData !== undefined ?
            <Grid container spacing={3}
                justify="space-between"
                alignItems="center" style={{position: "relative"}}> 
                <Grid item md={3} style={{position: "relative"}}> 
                        <Grid style={style}>
                            <ChartSVG value={detailsData.vote_average*10}/>
                        </Grid>
                        <img className="lazyload"
                        src={`https://image.tmdb.org/t/p/w45/${detailsData.poster_path}`}
                        data-src={`https://image.tmdb.org/t/p/w500/${detailsData.poster_path}`} alt={detailsData.title}/>
                    </Grid>
                    <Grid item md={9}> 
                        <Typography variant="h2">{detailsData.title ? detailsData.title : detailsData.original_name}</Typography>
                        <Grid container spacing={2}
                        justify="flex-start"
                        alignItems="center" style={{padding:"8px"}}> 
                            <FavoriteRoundedIcon className="hov" color="primary" onClick={handleAddfavorite} titleAccess="Mark as favorite"/>
                            <BookmarkRoundedIcon className="hov" color="primary" onClick={handleAddtoWatchlist} titleAccess="Add to your watchlist"/>
                            <GradeRoundedIcon className="hov" color="primary" onClick={handleClickRate} titleAccess="Rate it"/> 
                            <Grid hidden={hidden} style={{position:"relative"}}>
                                <Rating style={styleRate} name="simple-controlled" onChange={handlesetRate} value={rate} precision={0.5} /> 
                            </Grid> 
                        </Grid>
                        <Typography variant="caption">Tổng bình chọn: {detailsData.vote_count}</Typography> 
                        
                        <Typography variant="caption"> {detailsData.tagline}</Typography> 
                         
                        <Typography variant="caption">Thể loại: {detailsData.genres?.map((data) => <span key={data.id}>{data.name} </span>)} 
                       
                        </Typography>  
                         
                        <Typography variant="caption">Make in: {detailsData.production_companies[0] !== undefined ? detailsData.production_companies[0].name : "China"}</Typography>
                        
                        <Typography variant="h4">Overview</Typography> 

                        <Typography variant="caption"> {detailsData.overview}</Typography>
                        
                        {videoData !== undefined ?
                            <a href={videoData.results[0] !== undefined ? `https://www.youtube.com/watch?v=${ videoData.results[0]?.key}`: "" } target="_blank" rel="noopener noreferrer">
                                <Button variant="outlined" startIcon={<YouTubeIcon fontSize="large"/>}>Trailer</Button><br/><br/>
                            </a>
                            
                            : ""     
                        } 
                       
                        {
                            socialData !== undefined ?
                            <Grid>
                                    {socialData.facebook_id !== undefined ?
                                    <a href={`https://www.facebook.com/${socialData.facebook_id}`} target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon fontSize="large" className="hov" titleAccess="Facebook" color="primary"/>
                                    </a> : ""
                                }
                                {socialData.twitter_id !== undefined ?
                                    <a href={`https://twitter.com/${socialData.twitter_id}`} target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon fontSize="large" className="hov" titleAccess="Twitter" color="primary"/>
                                    </a>: ""
                                }
                                {socialData.instagram_id !== undefined ?
                                    <a href={`https://instagram.com/${socialData.instagram_id}`} target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon fontSize="large" className="hov" titleAccess="Instagram" color="primary"/>
                                    </a>: ""
                                } 
                                
                                <a href={detailsData.homepage} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon fontSize="large" className="hov" titleAccess="Home" color="primary"/>
                                </a>
                            
                            </Grid>:"loadding..."
                        } 
                    </Grid>
                </Grid>
            :
            "loadding..." 
            }
                
           
            <hr style={{display:"block",width:"100%",margin:"5px 0"}}/> 
            <br/>
            <Typography variant="h4">Series Cast  <Button variant="text" style={{float: "right"}} color="primary" ><Link to="/commingsoon">View all</Link></Button> </Typography>  
           
            <br/>
            {castData !== undefined ? 
                    <Slider {...settings}> 
                        {castData.cast?.map((item)=>
                        <Card key={item.id} className="peopleCard"> 
                            <img className="lazyload" height="216px"
                                src={item.profile_path !==null ? `https://image.tmdb.org/t/p/w45/${item.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-1252799405af813fe2e29e8b25c44d9a12406c0db697a6b4a25080f5974ddf68.svg`}
                                data-src={item.profile_path !==null ? `https://image.tmdb.org/t/p/w154/${item.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-1252799405af813fe2e29e8b25c44d9a12406c0db697a6b4a25080f5974ddf68.svg`} alt=""/>
                                <CardContent style={{padding:"10px 20px"}}> 
                                <Typography variant="body1">
                                    {item.name}
                                </Typography> 
                                </CardContent> 
                        </Card> 
                        )} 
                </Slider> : "" 
            } 
            
            <br/>
            <Typography variant="h4">Social</Typography>  
            <br/>
            {
                reviewData !== undefined ? 
                    reviewData.total_results !== 0 ?
                    reviewData.results?.map((data) =>
                    <Card key={data.id} style={{margin:"5px 0"}}>
                            <Grid container spacing={2} style={{margin:"0 ",padding: "5px"}}
                            justify="flex-start"
                            alignItems="center"
                            >
                                <Grid item md={7} style={{display:"flex",alignItems:"flex-start"}}> 
                                
                                    <Typography variant="caption" style={{whiteSpace: "nowrap", overflow: "hidden",textOverflow: "ellipsis"}}>{data.content}</Typography>
                                </Grid>
                                <Grid item md={1}> 
                                    <Typography variant="caption">Open</Typography>
                                </Grid>
                                <Grid item md={1}> 
                                    <Typography variant="caption">8</Typography>
                                </Grid>
                                <Grid item md={3}>
                                    <Typography variant="caption">{fullDayMY(data.updated_at)}<br/>by {data.author_details.username}</Typography>
                                </Grid>
                            </Grid>  
                        </Card>
                    )
                    :<Typography variant="caption" >Chưa có bình luận cho phim này</Typography> :""

            } 
            <br/>
            <Typography variant="h4">Media</Typography>  <br/>  
            <ButtonGroup variant="outlined">
                <Button onClick={()=> setVisible(!visible)}>Poster</Button>
                <Button onClick={()=> setVisible(!visible)}>Backdrops</Button>
            </ButtonGroup>  
            <br/>
            <br/> 
            {visible ? <LightgalleryProvider >  
                <Grid justify="flex-start" alignItems="flex-start" container spacing={2}>  
                       {
                          galleryData !== undefined ? 
                          galleryData.backdrops?.map((image)=>
                          <Grid item key={image.file_path}>
                          <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={`https://image.tmdb.org/t/p/w780/${image.file_path}`}> 
                               <img className="lazyload"
                                   src={`https://image.tmdb.org/t/p/w45/${image.file_path}`}
                                   data-src={`https://image.tmdb.org/t/p/w154/${image.file_path}`} alt=""/>
                           </LightgalleryItem>
                           </Grid>
                          ):""
                       } 
                </Grid>
            </LightgalleryProvider>
            :
            <LightgalleryProvider> 
                <Grid justify="flex-start" alignItems="flex-start" container spacing={2}>
                    {
                          galleryData !== undefined ? 
                          galleryData.posters.map((image)=>
                          <Grid item key={image.file_path}>
                          <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={`https://image.tmdb.org/t/p/w780/${image.file_path}`}> 
                               <img className="lazyload" height="200px"
                                   src={`https://image.tmdb.org/t/p/w45/${image.file_path}`}
                                   data-src={`https://image.tmdb.org/t/p/w154/${image.file_path}`} alt=""/>
                           </LightgalleryItem>
                           </Grid>
                          ):""
                       }
                </Grid>
            </LightgalleryProvider>
            }

           
            <br/>
            <Typography variant="h4">Recommendations</Typography>   
            <br/>
            <Slider {...settings2}>
                {recommentData !== undefined ? 
                    recommentData.results?.map((data) =>
                    data.backdrop_path !== null ?
                    <Card className="reconmenCard" key={data.id}>  
                        <img className="lazyload"
                            src={`https://image.tmdb.org/t/p/w45/${data.backdrop_path}`}
                            data-src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt={data.original_title}/>
                            <CardContent style={{padding:"10px 20px"}}>
                            
                            <Typography  variant="body1" style={{whiteSpace: "nowrap", overflow: "hidden",textOverflow: "ellipsis"}}>
                                {data.original_title !== undefined ? data.original_title : data.original_name } 
                            </Typography> 
                            </CardContent> 
                    </Card> : ""
                    )  : ""
                }
            </Slider>
            
        </Container> 
    );
}

export default DetailsTV;