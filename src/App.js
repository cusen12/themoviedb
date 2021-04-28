import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 

import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 
import React, { Suspense } from 'react';  

const HomePage = React.lazy(()=> import('./Pages/HomePage/HomePage'));
const People = React.lazy(()=> import('./Pages/People/People'));
const Movie = React.lazy(()=> import('./Pages/Movie/Movie'));
const TVShow = React.lazy(()=> import('./Pages/TVShow/TVShow'));
const Details = React.lazy(()=> import('./Pages/Details/Details'));
const CommingSoon = React.lazy(()=> import('./Pages/CommingSoon/CommingSoon'));
const Nav = React.lazy(()=> import('./Component/Nav/Nav'));
const Footer = React.lazy(()=> import('./Component/Footer/Footer')); 


const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#4d4646',
      contrastText: "#424242" 
    },
    secondary: {
      main: '#e4e4e4',
      contrastText: "#ffffff" 
    }
  } ,
  typography:{
    fontFamily: 'Raleway, Arial',
    fontWeight: 700,
    h1: {
      fontSize: 44,
      width:'100%',
      fontWeight: 600
    },
    h2: {
      fontSize: 34,
      width:'100%',
      fontWeight: 600
    },
    h3: {
      fontSize: 24,
      width:'100%',
      fontWeight: 600
    },
    h4: {
      fontSize: 18,
      width:'100%',
      fontWeight: 600
    },
    h5: {
      fontSize: 14,
      width:'100%',
      fontWeight: 600
    }

  }  
}) 
function App() { 
  return ( 
      
        <ThemeProvider theme={theme}>
          <Router>
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignContent="flex-start"
              >
                <Grid item md={2}>
                    <Nav/>
                </Grid>
                <Grid item md={10} className="main">
                  <Switch>
                    <Route exact path="/" children={<HomePage/>}/> 
                    <Route path="/movie" children={<Movie/>}/> 
                    <Route path="/tvshow" children={ <TVShow/>}/> 
                    <Route path="/people" children={<People/>}/> 
                    <Route path="/commingsoon" children={ <CommingSoon/>}/>  
                    <Route path="/:id" children={ <Details/>}/>  
                  </Switch> 
                </Grid>
              </Grid>
              <Footer/> 
            </Suspense>
          </> 
          </Router>
        </ThemeProvider>
        
     
  );
}

export default App;
