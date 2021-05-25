import { Button, Grid, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux'; 

import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'; 
import { Alert } from '@material-ui/lab';
 
function More(props) {
    const [idRate, setIdRate] = useState();  
    const [hidden, setHidden]= useState(true) 
    const [alrHidden, setAlrHidden]= useState(true) 
    const [textAler, setTextAler]= useState(true) 
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
    const styleBox={
        position: "absolute",
        width: "200px",
        top:"30px",
        right:"-15px", 
        padding:"8px",
        zIndex:"10",
        background:"#fff",
        borderRadius:"5px"
    } 
    const styleAlr={
        position: "fixed",
        bottom: "30px",
        left: "40px",
    }
    const checkLogin = useSelector(state => state.login.value.success)  
    const handleClickMore = (id) =>{ 
        setHidden(!hidden); 
        setIdRate(id)
        console.log("More",idRate)
    }
     
    const handleAddfavorite = () => { 
        setTextAler("Add to Favorite")
        setAlrHidden(false)
        setTimeout(()=>{
            setAlrHidden(true)
        },2000)
        console.log(idRate)
    }
    const handleAddtoList = () => {  
        setTextAler("Add to list")
        setAlrHidden(false)
        setTimeout(()=>{
            setAlrHidden(true)
        },2000)
        console.log(idRate)
    }
    const handleAddtoWatchlist = () => {  
        setTextAler("Add to watch list")
        setAlrHidden(false)
        setTimeout(()=>{
            setAlrHidden(true)
        },2000)
        console.log(idRate)
    }   
    return (
        <Grid style={style}>
                <Grid style={styleAlr}  hidden={alrHidden}>
                    <Alert severity="success"> 
                      {textAler} thành công!!!! ID là {idRate}
                    </Alert>
                </Grid>
                <MoreHorizIcon color="primary"  
                onClick={()=>handleClickMore(props.id)}
                /> 
                {checkLogin ? 
                <Grid hidden={hidden} style={style2}>  
                    <Grid container spacing={2} onMouseLeave={()=> setHidden(true)}
                    justify="flex-start"
                    alignItems="center" style={styleBox}>
                        <Button variant="text" onClick={handleAddtoList} 
                        startIcon={<FormatListBulletedRoundedIcon className="hov" color="primary" fontSize="small" titleAccess="Add to list"/>
                        }> 
                            Add to list
                        </Button>
                        <hr style={{display:"block",width:"100%"}}/>
                        <Button variant="text" onClick={handleAddfavorite} 
                        startIcon={<FavoriteRoundedIcon className="hov" color="primary" fontSize="small" titleAccess="Mark as favorite"/>}
                        >
                            Mark as favorite
                        </Button> 
                        <hr style={{display:"block",width:"100%"}}/>
                        <Button variant="text" onClick={handleAddtoWatchlist} 
                        startIcon={<BookmarkRoundedIcon className="hov" color="primary" titleAccess="Add to your watchlist"/>}
                         >
                            Add to your watchlist
                        </Button>
                        
                    </Grid>
                </Grid> :
                <Grid hidden={hidden} style={style2}>  
                      <Grid container spacing={2} onMouseLeave={()=> setHidden(true)}
                        justify="flex-start"
                        alignItems="center" style={styleBox}>
                            <Typography variant="h5" onClick={handleAddtoList}>
                                Bạn cần đăng nhập để thực hiện chức năng này 
                            </Typography> 
                    </Grid>
                </Grid> 
                } 
        </Grid>
    );
}

export default More;