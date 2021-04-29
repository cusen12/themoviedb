import { Button, Grid, Typography } from '@material-ui/core';
import React, { Suspense, useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import './HomePage.scss';  

const ListMovie = React.lazy(()=> import('../../Component/ListMovie/ListMovie'));
const ListSearch = React.lazy(()=> import('../../Component/ListSearch/ListSearch'));
const ListTVShow = React.lazy(()=> import('../../Component/ListTVShow/ListTVShow'));

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
    const langData = useSelector(state=>state.reducer.value.hero); 
    return (
        <>  
            
            <Grid className="homepage">
                <Grid className="search">
                    <Grid className="content">
                        <Typography variant="h2" color="secondary">{langData.welcome}</Typography> 
                        <Typography variant="h4" color="secondary">{langData.destription}</Typography>
                        <br/>
                        <div className="input"  >
                            <input type="text" onChange={handleChangeInput}/>
                            <Button onClick={handleClickSearch}>{langData.search}</Button>
                        </div> 
                    </Grid>
                </Grid> 
                {
                    isSearch ? <ListSearch data={valueSearch}/> : 
                    <Grid item md={12} className="bg-home "> 
                    <Suspense fallback={<div>Loading...</div>}>
                        <ListMovie/>
                        <ListTVShow/>  
                    </Suspense> 
                </Grid>
                }
            </Grid> 
        </>
    );
}

export default HomePage;