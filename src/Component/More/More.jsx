import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux';

 
function More(props) {
    const [hidden, setHidden]= useState(false)
    const [visable, setVisable]= useState(true)
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
    const checkLogin = useSelector(state => state.login.value.success) 
    const handleClickMore = (dataId) =>{ 
         console.log(dataId); 
         setVisable(!visable)
    }
    useEffect(()=>{
        if(checkLogin){
            setHidden(false)
        }
        else{
            setHidden(true)
        }
    },[checkLogin])
   
    return (
        <Grid style={style} 
        onClick={()=>handleClickMore(!visable)}>
            <MoreHorizIcon color="primary"/> 
                <Grid hidden={hidden} style={style2}> 
                    <Grid  hidden={visable}> 
                        login rồi
                     </Grid>
                    
                </Grid>
                <Grid hidden={!hidden} style={style2}> 
                    <Grid hidden={visable}> 
                       chưa login
                     </Grid>
                </Grid> 
        </Grid>
    );
}

export default More;