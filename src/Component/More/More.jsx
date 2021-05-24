import { Grid} from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux';

import { Rating } from '@material-ui/lab';

import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'; 
 
function More(props) {
    
    const [rate, setRate] = useState(5);  
    const [hidden, setHidden]= useState(true)
    const [hiddenRate, setHiddenRate]= useState(true) 
    const style={
        position:"absolute",
        top:"5px",
        right:"25px", 
        width: "25px",
        height: "25px",
        background: "#d8d8d8",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    }
    const style2={
        position:"absolute",
        top:"5px",
        right:"25px", 
        width: "25px",
        height: "25px", 
        
    }
    const styleRate ={
        position: "absolute",
        top:"-12px",
        left:"0"
    } 
    const styleBox={
        position: "absolute",
        top:"30px",
        right:"-15px", 
        padding:"8px",
        zIndex:"10",
        background:"#fff",
        borderRadius:"5px"
    }
    const checkLogin = useSelector(state => state.login.value.success) 
    const handleClickRate = () => {  
        setHiddenRate(!hiddenRate);
    }
    const handleClickMore = (id) =>{   
        setHidden(!hidden); 
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
        setHidden(!hidden); 
    }   
    return (
        <Grid style={style}>
                <MoreHorizIcon color="primary" onClick={()=>handleClickMore(props.id)}/> 
                {checkLogin ? 
                    <Grid hidden={hidden} style={style2}>  
                    <Grid container spacing={2}
                    justify="flex-start"
                    alignItems="center" style={styleBox}>
                        <FormatListBulletedRoundedIcon className="hov" color="primary" fontSize="small" onClick={handleAddtoList} titleAccess="Add to list"/>
                        <FavoriteRoundedIcon className="hov" color="primary" fontSize="small" onClick={handleAddfavorite} titleAccess="Mark as favorite"/> 
                        <BookmarkRoundedIcon className="hov" color="primary" onClick={handleAddtoWatchlist} titleAccess="Add to your watchlist"/>
                        <GradeRoundedIcon className="hov" color="primary" fontSize="small"  onClick={handleClickRate} titleAccess="Rate it"/> 
                        <Grid hidden={hiddenRate} style={{position:"relative"}}>
                            <Rating style={styleRate} name="simple-controlled" onChange={handlesetRate} value={rate} precision={0.5} /> 
                        </Grid>  
                    </Grid>
                </Grid> :
                <Grid hidden={hidden} style={style2}>  
                       chưa login 
                </Grid> 
                } 
        </Grid>
    );
}

export default More;