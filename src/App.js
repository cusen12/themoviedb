import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import HomePage from './Pages/HomePage/HomePage';
import Movie from './Pages/Movie/Movie';
// import People from './Pages/People/People';
import TVShow from './Pages/TVShow/TVShow';  
import Details from './Pages/Details/Details'; 
import CommingSoon from './Pages/CommingSoon/CommingSoon';  

import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'; 
import SearchPage from './Component/SearchPage/SearchPage';
import { Suspense } from 'react';
import React from 'react'; 
import Profile from './Pages/Profile/Profile';
import WatchListMovie from './Pages/WatchListMovie/WatchListMovie';
import WatchListTV from './Pages/WatchListTV/WatchListTV';
import RateListMovie from './Pages/RatedListMovie/RatedListMovie';
import RateListTV from './Pages/RatedListTV/RatedListTV';
import FavoriteListMovie from './Pages/FavoriteListMovie/FavoriteListMovie';
import FavoriteListTV from './Pages/FavoriteListTV/FavoriteListTV';
import ToTop from './Component/Top/ToTop';

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
      fontWeight: 600,
      lineHeight: "2.167",
    },
    h2: {
      fontSize: 34,
      width:'100%',
      fontWeight: 600,
      lineHeight: "2.167",
    },
    h3: {
      fontSize: 24,
      width:'100%',
      fontWeight: 600,
      lineHeight: "2.167",
    },
    h4: {
      fontSize: 18,
      width:'100%',
      fontWeight: 600,
      lineHeight: "2.167",
    },
    h5: {
      fontSize: 14,
      width:'100%',
      fontWeight: 600, 
    }

  }  
}) 
function App() {   
  console.log(Router) 
  return ( 
      
        <ThemeProvider theme={theme}>
          <Router forceRefresh={true}> 
            <Suspense fallback={<div>Loading...</div>}>
                <Nav/> 
                <Grid className="main">
                  <Switch>
                    <Route exact path="/" children={<HomePage/>}/> 
                    <Route path="/movie" children={<Movie/>}/> 
                    <Route path="/tvshow" children={ <TVShow/>}/> 
                    <Route path="/people" children={<CommingSoon/>}/> 
                    <Route path="/commingsoon" children={ <CommingSoon/>}/> 
                    <Route path="/search" children={ <SearchPage/>}/>   
                    <Route path="/category/:category/:id" children={ <Details/>}/> 
                    <Route path="/profile" children={ <Profile/>}/> 
                    <Route path="/watchmovie" children={ <WatchListMovie/>}/>  
                    <Route path="/watchtv" children={ <WatchListTV/>}/>   
                    <Route path="/ratemovie" children={ <RateListMovie/>}/> 
                    <Route path="/ratetv" children={ <RateListTV/>}/>  
                    <Route path="/favoritemovie" children={ <FavoriteListMovie/>}/>
                    <Route path="/favoritetv" children={ <FavoriteListTV/>}/>         
                  </Switch> 
                </Grid> 
                <ToTop/>
                <Footer/>  
              </Suspense>
          </Router>
        </ThemeProvider>
     
  );
}

export default App;
