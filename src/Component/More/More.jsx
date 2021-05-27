import { Grid, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux'; 
 
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'; 
import { Alert } from '@material-ui/lab';
 
function More(props) {
    const [idRate, setIdRate] = useState(); 
    const [category, setCategory] =  useState()
    const [hidden, setHidden]= useState(true) 
    const [alrHidden, setAlrHidden]= useState(true)  
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
        top: "150px",
        right: "0",
        zIndex:"1000"
    }

    const sectionData = useSelector(state=>state.section.value);   
    const sectionId = sectionData.session_id
    const checkLogin = useSelector(state => state.login.value.success)
    const idUser = useSelector(state=>state.getIDLogin.value)
    
    const handleClickMore = (id, category) =>{ 
        setHidden(!hidden); 
        setIdRate(id) 
        setCategory(category)
    }  
    const handleAddfavorite = () => {   
        if(checkLogin === true){
            const addtoFavorite = async () =>{ 

                const dataToken = {
                    "media_type": category,
                    "media_id": idRate,
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
    const handleAddtoWatchlist = () => {    
        const addtoWatchList = async () =>{ 

            const dataToken = {
                "media_type": category,
                "media_id": idRate,
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
    return (
        <Grid style={style}>
                <Grid style={styleAlr}  hidden={alrHidden}>
                    <Alert severity="success"> 
                        Success!!!!!
                    </Alert>
                </Grid>
                <MoreHorizIcon color="primary"  
                onClick={()=>handleClickMore(props.id, props.category)}
                /> 
                {checkLogin ? 
                <Grid hidden={hidden} style={style2}>  
                    <Grid container spacing={2} onMouseLeave={()=> setHidden(true)}
                    justify="flex-start"
                    alignItems="center" style={styleBox}>
                         <Typography variant="h5"> 
                            Add movie to your list
                        </Typography> 
                        <Typography style={{display:"flex", alignItems:"center"}} variant="caption" onClick={handleAddfavorite}>
                            <FavoriteRoundedIcon className="hov" color="primary" fontSize="small" titleAccess="Mark as favorite"/>
                            Mark as favorite
                        </Typography> 
                        <br/>  
                        <Typography style={{display:"flex", alignItems:"center"}} variant="caption" onClick={handleAddtoWatchlist} >
                        <BookmarkRoundedIcon className="hov" color="primary" titleAccess="Add to your watchlist"/>
                         Add to your watchlist
                        </Typography> 
                    </Grid>
                </Grid> :
                <Grid hidden={hidden} style={style2}>  
                      <Grid container spacing={2} onMouseLeave={()=> setHidden(true)}
                        justify="flex-start"
                        alignItems="center" style={styleBox}>
                            <Typography variant="h5">
                                Bạn cần đăng nhập để thực hiện chức năng này 
                            </Typography> 
                    </Grid>
                </Grid> 
                } 
        </Grid>
    );
}

export default More;