import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from './loginSlice';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { section } from '../Section/SectionSlice'; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

function Login() {   
    const dispatch = useDispatch();
    const [bool,setBool] =useState(false)
    const loginData = useSelector(state=>state.login.value);
    const [isLogin, setIsLogin] = useState(true)
    const requestToken = loginData ? loginData.request_token : "";
    const [checkLogin, setCheckLogin] = useState("")
    const createRequesToken = async ()=>{
        const request = await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=cd58c7bd131cba3c391d62c5fda2ae53");
        const requesJson = await request.json(); 
        return requesJson.request_token

    }
    useEffect(() =>{
        if(bool === true){
            const createSection = async ()=>{  
                const dataToken = {
                    "request_token": requestToken
                  } 
                fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=cd58c7bd131cba3c391d62c5fda2ae53", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToken),
                })
                .then(response => response.json())
                .then(data => {   
                   dispatch(section(data))
                })
                .catch((error) => {
                    console.log('Error:', error); 
                }); 
            } 
            createSection()
        }
    },[bool,requestToken,dispatch])
    
    const handleSubmitLogin = async (e)=>{
        e.preventDefault();
        const userName = e.target.username.value;
        const password = e.target.password.value;
        const token = await createRequesToken(); 
        const data = {
            "username": userName,
            "password": password,
            "request_token": token
        } 
        const link = "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=cd58c7bd131cba3c391d62c5fda2ae53"
        fetch(link, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => { 
            dispatch(login(data))
            if(data.success === false){
                setCheckLogin("Sai tên đăng nhập or mật khẩu"); 
            }
            else{
                setCheckLogin("");
                setBool(true) 
            }
        })
        .catch((error) => {
            console.log('Error:', error); 
        });
    }
    const handleLogout = async () =>{
        dispatch(logout())  
        await setBool(false) 
        console.log("logout")
    }
    const handleDetailsUser = async () =>{
        console.log("lấy thông tin user ở đây")
    }
    
    return (
        <Grid container item className="login" md={12}>
            {loginData !== undefined ? 
                <Grid item md={12}>
                    {
                       loginData.success===true ? 
                       <Grid container  
                       alignItems="center"
                       justify="space-between">   
                           <AccountCircleRoundedIcon onClick={handleDetailsUser} color="primary" style={{fontSize:"30px"}}/>  
                           <i>Hi! Have a nice day</i>
                           <ExitToAppIcon color="primary" style={{fontSize:"18"}} onClick={handleLogout}/>
                           <hr style={{display:"block",width:"100%"}}/>
                       
                       </Grid>
                       :
                        <Grid>
                        <Typography variant="h5" onClick={() => setIsLogin(!isLogin)}>Đăng nhập</Typography>
                       
                        <form onSubmit={handleSubmitLogin} hidden={isLogin} >
                            <TextField fullWidth id="username" name="username" label="Username" />
                            <TextField fullWidth type="password" id="password" name="password" label="Password" />
                            <p><i style={{fontSize:"11px",color:"red"}}>{checkLogin}</i></p>
                            
                            <Grid container style={{padding:"5px 0"}}  
                        alignItems="center"
                        justify="flex-end">   
                                <Button type="submit" variant="contained" color="secondary"><ArrowForwardRoundedIcon/></Button>
                            </Grid> 
                        </form>
                        <hr/>
                    </Grid>
                    }
                     
                     
                </Grid>    
                : 
                <Grid>
                <Typography variant="h5" onClick={() => setIsLogin(!isLogin)}>Đăng nhập</Typography>
                <form onSubmit={handleSubmitLogin} hidden={isLogin} >
                    <TextField fullWidth id="username" name="username" label="Username" />
                    <TextField fullWidth type="password" id="password" name="password" label="Password" />
                    <p><i style={{fontSize:"11px",color:"red"}}>{checkLogin}</i></p>
                    
                    <Grid container style={{padding:"5px 0"}}  
                alignItems="center"
                justify="flex-end">   
                        <Button type="submit" variant="contained" color="secondary"><ArrowForwardRoundedIcon/></Button>
                    </Grid> 
                </form>
                <hr/>
            </Grid>
            }
        </Grid>
    );
}

export default Login;