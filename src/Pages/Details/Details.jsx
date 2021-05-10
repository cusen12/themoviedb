import { Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.scss'; 
import ChartSVG from '../../Component/ChartSVG/ChartSVG';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'; 
import YouTubeIcon from '@material-ui/icons/YouTube';

import { Rating } from '@material-ui/lab';
import Slider from 'react-slick';



function Details() {
    const { category,id } = useParams();
    const [rate, setRate] = useState(5); 
    const [hidden, sethidden] = useState(true);  
    const style ={
        position: "absolute",
        top:"20px",
        left:"20px"
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

    const handleClickRate = () => {  
        sethidden(!hidden);
    }
    const handleAddfavorite = () => { 
        console.log("Thực hiện add to Favorite")
    }
    const handleAddtoList = () => { 
        console.log("Thực hiện add to list")
    }
    const handleAddtoWatchlist = () => { 
        console.log("Thực hiện add to watch list")
    } 
    const handlesetRate = (event,newValue) =>{  
        setRate(newValue)  
        alert("Thanks to vote!!");
        sethidden(!hidden);
        console.log(id)
    }
    return ( 
        <Container className={"details-"+category}> 
            <Grid container spacing={3}
            justify="space-between"
            alignItems="center" style={{position: "relative"}}> 
                <Grid item md={3} style={{position: "relative"}}> 
                    <Grid style={style}>
                        <ChartSVG value="98"/>
                    </Grid>
                    <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w500/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                </Grid>
                <Grid item md={9}> 
                    <Typography variant="h2">Bác sĩ thiên tài</Typography>
                    <Grid container spacing={2}
                    justify="flex-start"
                    alignItems="center" style={{padding:"8px"}}>
                        <FormatListBulletedRoundedIcon className="hov" color="primary" onClick={handleAddtoList} titleAccess="Add to list"/>
                        <FavoriteRoundedIcon className="hov" color="primary" onClick={handleAddfavorite} titleAccess="Mark as favorite"/>
                        <BookmarkRoundedIcon className="hov" color="primary" onClick={handleAddtoWatchlist} titleAccess="Add to your watchlist"/>
                        <GradeRoundedIcon className="hov" color="primary" onClick={handleClickRate} titleAccess="Rate it"/> 
                        <Grid hidden={hidden} style={{position:"relative"}}>
                            <Rating style={styleRate} name="simple-controlled" onChange={handlesetRate} value={rate} precision={0.5} /> 
                        </Grid> 
                    </Grid>
                    <Typography variant="caption">Tổng bình chọn: 33222</Typography> 
                    <br/>  
                    <Typography variant="caption">How much can you know about yourself if you've never been in a fight?</Typography> 
                    <br/> 
                    <Typography variant="caption">Thể loại: Chính Kịch - 43 phút</Typography>  
                    <br/>
                    <Typography variant="caption">Đao diễn: Thành Tuân</Typography>
                    <br/>
                    <Typography variant="h4">Overview</Typography> 
                    <Typography variant="caption">Một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu thuật tim của một bệnh viện danh tiếng. Liệu một người bị tự kỷ có thể cứu người? Phim dựa trên series cùng tên của Hàn Quốc.</Typography>
                    <br/>
                    <Link to="https://www.youtube.com/watch?v=ATYw7oM3Cho" target={"_blank"} rel="noopener noreferrer"><Button variant="outlined" startIcon={<YouTubeIcon fontSize="large"/>}>Trailer</Button></Link>
                    
                </Grid>
                
            </Grid>
            <hr style={{display:"block",width:"100%",margin:"5px 0"}}/> 
            <br/>
            <Typography variant="h4">Series Cast  <Button variant="text" style={{float: "right"}} color="primary" ><Link to="/commingsoon">View all</Link></Button> </Typography>  
           
            <br/>
            <Slider {...settings}>
                <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card> 
            <Card  className="peopleCard"> 
                <img className="lazyload"
                    src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                    data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                    <CardContent style={{padding:"10px 20px"}}>
                    
                    <Typography  variant="body1">
                        Sen đẹp trai
                    </Typography> 
                    </CardContent> 
            </Card>  
            </Slider> 
            <br/>
            <Typography variant="h4">Social</Typography>  
            <br/>
            <Card style={{margin:"5px 0"}}>
                <Grid container spacing={2} style={{margin:"0 ",padding: "5px"}}
                justify="flex-start"
                alignItems="center"
                >
                    <Grid item md={7} style={{display:"flex",alignItems:"center"}}> 
                        <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/uQ5zh6btNrjXbE8l9bswJA4XJ4E.jpg" style={{borderRadius:"50%", marginRight:"5px"}} alt="" />
                        <Typography variant="caption">Một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu.</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">Open</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">8</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="caption">Apr 20, 2021 at 2:29 PM<br/>by Still Water Wellness Group</Typography>
                    </Grid>
                </Grid>  
            </Card> 
            <Card style={{margin:"5px 0"}}>
                <Grid container spacing={2} style={{margin:"0 ",padding: "5px"}}
                justify="flex-start"
                alignItems="center"
                >
                    <Grid item md={7} style={{display:"flex",alignItems:"center"}}> 
                        <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/uQ5zh6btNrjXbE8l9bswJA4XJ4E.jpg" style={{borderRadius:"50%", marginRight:"5px"}} alt="" />
                        <Typography variant="caption">Một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu.</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">Open</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">8</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="caption">Apr 20, 2021 at 2:29 PM<br/>by Still Water Wellness Group</Typography>
                    </Grid>
                </Grid>  
            </Card> 
            <Card style={{margin:"5px 0"}}>
                <Grid container spacing={2} style={{margin:"0 ",padding: "5px"}}
                justify="flex-start"
                alignItems="center"
                >
                    <Grid item md={7} style={{display:"flex",alignItems:"center"}}> 
                        <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/uQ5zh6btNrjXbE8l9bswJA4XJ4E.jpg" style={{borderRadius:"50%", marginRight:"5px"}} alt="" />
                        <Typography variant="caption">Một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu.</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">Open</Typography>
                    </Grid>
                    <Grid item md={1}> 
                        <Typography variant="caption">8</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="caption">Apr 20, 2021 at 2:29 PM<br/>by Still Water Wellness Group</Typography>
                    </Grid>
                </Grid>  
            </Card> 
            <br/>
            <Typography variant="h4">Current Season <Button variant="text" style={{float: "right"}} color="primary" ><Link to="/commingsoon">View all</Link></Button> </Typography>  
            <br/>
            <Card>
               <Grid container justify="flex-start" alignItems="center">
                <Grid item md={2}>
                    <img className="lazyload" 
                        src={"https://image.tmdb.org/t/p/w45/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"}
                        data-src={"https://image.tmdb.org/t/p/w154/z1K4mJwISETia59rrnMdXxzoSrZ.jpg"} alt="abc"/>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="h4">Overview</Typography> 
                    <Typography variant="caption">Một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu thuật tim của một bệnh viện danh tiếng. Liệu một người bị tự kỷ có thể cứu người? Phim dựa trên series cùng tên của Hàn Quốc.</Typography>
                
                </Grid>
               </Grid> 
            </Card>
        </Container> 
    );
}

export default Details;