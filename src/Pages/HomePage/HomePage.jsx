import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ListMovie from '../../Component/ListMovie/ListMovie';
import ListTVShow from '../../Component/ListTVShow/ListTVShow'; 
import './HomePage.scss';

function HomePage() {
    const [value, setValue] = useState();
    const handleChangeInput = (e) =>{
        setValue(e.target.value)
    }
    const handleClickSearch = async () =>{ 
        const link =`https://api.themoviedb.org/3/search/keyword?api_key=cd58c7bd131cba3c391d62c5fda2ae53&query=${value}`;
        const respond = await fetch(link);
        const respondJson = await respond.json()
        console.log( respondJson);
    }
    return (
        <> 
             
             <Grid className="homepage">
                <Grid className="search">
                    <Grid className="content">
                        <Typography variant="h2" color="secondary">Hello Word</Typography> 
                        <Typography variant="h4" color="secondary">Millions of movies, TV shows and people to discover. Explore now.</Typography>
                        <div className="input">
                            <input type="text" onChange={handleChangeInput}/>
                            <Button onClick={handleClickSearch}>Search</Button>
                        </div>
                    </Grid>
                </Grid> 
                <Grid item md={12} className="bg-home "> 
                    <Typography variant="h4" color="primary">TV Show</Typography> 
                    <ListTVShow/>

                    <Typography variant="h4" color="primary">Movie</Typography>
                    <ListMovie/>
                </Grid>
             </Grid>
            
        </>
    );
}

export default HomePage;