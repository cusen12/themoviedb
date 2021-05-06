import { Button, Grid, Typography } from '@material-ui/core'; 
import React, { Suspense, useState } from 'react'; 
import { useSelector } from 'react-redux';  
import { useHistory } from 'react-router';
import './HomePage.scss';  

const ListMovie = React.lazy(()=> import('../../Component/ListMovie/ListMovie')); 
const ListTVShow = React.lazy(()=> import('../../Component/ListTVShow/ListTVShow'));
const PeopleList = React.lazy(()=> import('../../Component/PeopleList/PeopleList'));

function HomePage() {  
    const history = useHistory()
    const [value, setValue] = useState(); 
    const handleChangeInput = (e) =>{
        setValue(e.target.value)
    }
    const handleClickSearch = () =>{   
        history.push('/search', {params:value});
    }
    const langData = useSelector(state=>state.language.value.hero); 
    return ( 
        <Grid className="homepage">
            <Grid className="search">
                <Grid className="content">
                    <Typography variant="h2" color="secondary">{langData.welcome}</Typography> 
                    <Typography variant="h4" color="secondary">{langData.destription}</Typography>
                    <br/>
                    <div className="input">
                        <input type="text" onChange={handleChangeInput}/>
                        <Button onClick={handleClickSearch}>{langData.search}</Button>
                    </div> 
                </Grid>
            </Grid> 
            
                <Suspense fallback={<div>Loading...</div>}> 
                <Grid item md={12}>  
                    <ListMovie/>
                    <ListTVShow/>
                    <PeopleList/>  
                </Grid> 
            </Suspense>
           
        </Grid>  
    );
}

export default HomePage;