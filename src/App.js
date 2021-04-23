import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Movie from './Pages/Movie/Movie';
import People from './Pages/People/People';
import TVShow from './Pages/TVShow/TVShow'; 
import Nav from './Component/Nav/Nav';
import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#000000',
      contrastText: "#424242" 
    },
    secondary: {
      main: '#ffffff',
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
          <Grid container
            direction="row"
            justify="flex-start"
            alignContent="flex-start"
          >
            <Grid item md={2}>
                <Nav/>
            </Grid>
            <Grid item md={10}>
              <Switch>
                <Route exact path="/">
                  <HomePage/> 
                </Route>
                <Route path="/movie">
                  <Movie/>
                </Route> 
                <Route path="/tvshow">
                  <TVShow/>
                </Route>
                <Route path="/people">
                  <People/>
                </Route>
              </Switch> 
            </Grid>
          </Grid> 
      </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
