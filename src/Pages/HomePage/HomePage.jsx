import { Button, Grid, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react'; 
import ListMovie from '../../Component/ListMovie/ListMovie';
import ListSearch from '../../Component/ListSearch/ListSearch';
import ListTVShow from '../../Component/ListTVShow/ListTVShow'; 
import './HomePage.scss';

function HomePage() {  
    const [value, setValue] = useState();
    const [valueSearch, setValueSearch] = useState();
    const [isSearch, setIsSearch] = useState(false); 
    const handleChangeInput = (e) =>{
        setValue(e.target.value)
    }
    const handleClickSearch = () =>{   
        if(value === ""){
            setIsSearch(false)  
        }
        else{
            setValueSearch(value)
            setIsSearch(true) 
        } 
        
       
    }
    return (
        <> 
             
             <Grid className="homepage">
                <Grid className="search">
                    <Grid className="content">
                        <Typography variant="h2" color="secondary">Hello Word</Typography> 
                        <Typography variant="h4" color="secondary">Millions of movies, TV shows and people to discover. Explore now.</Typography>
                        <div className="input"  >
                            <input type="text" onChange={handleChangeInput}/>
                            <Button onClick={handleClickSearch}>Search</Button>
                        </div>
                    </Grid>
                </Grid> 
                {
                    isSearch ? <ListSearch data={valueSearch}/> : 
                    <Grid item md={12} className="bg-home "> 
                    <Typography variant="h4" color="primary">TV Show</Typography> 
                    <ListTVShow/>

                    <Typography variant="h4" color="primary">Movie</Typography>
                    <ListMovie/>
                </Grid>
                }
             </Grid>
            
        </>
    );
}

export default HomePage;