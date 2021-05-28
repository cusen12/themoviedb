import { Button, Card, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';  
import { useSelector } from 'react-redux'; 
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Alert } from '@material-ui/lab';
import "./ItemLists.scss"

function ItemLists(props) { 
    
    const sectionData = useSelector(state=>state.section.value);   
    const sectionId = sectionData.session_id
    const idUser = useSelector(state=>state.getIDLogin.value) 
    const [alrHidden, setAlrHidden]= useState(true) 
    const [hidden ,setHidden] = useState(false) 
    const history = useHistory()
    const handleClick = (id,category) =>{ 
        history.push("/"+category+id);
    }    
    const handleAddtoRemove = (category,listname,id) => {  
        if(listname === "favorite"){
            const removetoList = async () =>{  
                const dataToken = {
                    "media_type": category,
                    "media_id": id,  
                    "favorite": false
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
                        setHidden(true)
                    }  
                })
                .catch((error) => {
                    console.log('Error:', error); 
                });  
            }   
            removetoList()
        }
        else{
            const removetoList = async () =>{ 
             
                const dataToken = {
                    "media_type": category,
                    "media_id": id,  
                    "watchlist":false
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
                        setHidden(true)
                    }  
                })
                .catch((error) => {
                    console.log('Error:', error); 
                });  
            }   
            removetoList()
        }
    }
    const styleAlr={
        position: "fixed",
        width:"200px",
        top: "150px",
        right: "0",
        zIndex:"1000"
    }
    return (  
        <Card style={{marginBottom:"10px"}} id={props.id} hidden={hidden}> 
            <Grid style={styleAlr}  hidden={alrHidden}>
                <Alert severity="success"> 
                    Success!!!!!
                </Alert>
            </Grid>
            <Grid container justify="flex-start" className="list-items" alignItems="center"  spacing={3} wrap="nowrap">
                <Grid item>
                    <img className="lazyload" width="150px" height="200px"
                        src={"https://www.themoviedb.org/t/p/w45_and_h45_bestv2/"+props.images}
                        data-src={"https://www.themoviedb.org/t/p/w150_and_h225_bestv2/"+props.images} alt={props.title}/> 
                </Grid>
                <Grid item>
                    <Typography variant="h3" onClick={()=> handleClick(props.id,props.category)}>{props.title}</Typography>
                    {props.youRate? <Typography variant="h5">YouRate: {props.youRate}</Typography> : ""}
                    <Typography variant="body1">{props.destription}</Typography>
                    <br/>
                    <Button onClick={()=>handleAddtoRemove(props.category,props.listname,props.id)}>  
                        <DeleteOutlineIcon className="hov" color="primary"  style={{color:"#b70707"}} titleAccess="Remove"/>Remove
                    </Button>
                </Grid>
            </Grid> 
        </Card> 
    );
}

export default ItemLists;