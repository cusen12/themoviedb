import { Card, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Rating } from '@material-ui/lab';

import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'; 

function ItemLists(props) {
    const [rate, setRate] = useState(5); 
    const [hidden, sethidden] = useState(true); 
    const history = useHistory()
    const handleClick = (id,category) =>{ 
        history.push("/category/"+category+"/"+id);
    }
    const styleRate ={
        position: "absolute",
        top:"-12px",
        left:"0"
    } 
    const handleClickRate = () => {  
        sethidden(!hidden);
    }
    const handleAddfavorite = () => { 
        console.log("Thực hiện add to Favorite")
    }
    const handleAddtoList = () => { 
        console.log("Thực hiện add to list")
    }
    const handleAddtoRemove = () => { 
        console.log("removie    ")
    } 
    const handlesetRate = (event,newValue) =>{  
        setRate(newValue)  
        alert("Thanks to vote!!");
        sethidden(!hidden); 
    }   
    return ( 
        <Card style={{marginBottom:"10px"}} id={props.id}>
            <Grid container justify="flex-start" alignItems="center" spacing={3} wrap="nowrap">
                <Grid item >
                    <img className="lazyload" width="150px" height="200px"
                        src={"https://www.themoviedb.org/t/p/w45_and_h45_bestv2/"+props.images}
                        data-src={"https://www.themoviedb.org/t/p/w150_and_h225_bestv2/"+props.images} alt={props.title}/> 
                </Grid>
                <Grid item>
                    <Typography variant="h3" onClick={()=> handleClick(props.id,props.category)}>{props.title}</Typography>
                    <Typography variant="caption">{props.destription}</Typography>
                    <Grid container spacing={2}
                    justify="flex-start"
                    alignItems="center" style={{padding:"8px"}}>
                        <FormatListBulletedRoundedIcon className="hov" color="primary" fontSize="small" onClick={handleAddtoList} titleAccess="Add to list"/>
                        <FavoriteRoundedIcon className="hov" color="primary" fontSize="small" style={{color:"red"}} onClick={handleAddfavorite} titleAccess="Mark as favorite"/> 
                        <GradeRoundedIcon className="hov" color="primary" fontSize="small"  onClick={handleClickRate} titleAccess="Rate it"/> 
                        <Grid hidden={hidden} style={{position:"relative"}}>
                            <Rating style={styleRate} name="simple-controlled" onChange={handlesetRate} value={rate} precision={0.5} /> 
                        </Grid> 
                        <DeleteOutlineIcon className="hov" color="primary" fontSize="small" onClick={handleAddtoRemove} titleAccess="Remove"/>
                    </Grid>
                </Grid>
            </Grid> 
        </Card> 
    );
}

export default ItemLists;