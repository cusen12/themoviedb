import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'; 
import Language from '../../Component/Language/Language';
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
                        <Typography variant="h2" color="secondary">Xin chào.</Typography> 
                        <Typography variant="h4" color="secondary">Hàng triệu bộ phim, chương trình truyền hình và mọi người để khám phá. Khám phá ngay bây giờ.</Typography>
                        <br/>
                        <div className="input"  >
                            <input type="text" onChange={handleChangeInput}/>
                            <Button onClick={handleClickSearch}>Search</Button>
                        </div>
                        <Language/>
                    </Grid>
                </Grid> 
                {
                    isSearch ? <ListSearch data={valueSearch}/> : 
                    <Grid item md={12} className="bg-home "> 
                    <Typography variant="h4" className="titleH4" color="primary">TOP TV Show</Typography> 
                    <ListTVShow/>

                    <Typography variant="h4" className="titleH4" color="primary">TOP Movie</Typography>
                    <ListMovie/>
                </Grid>
                }
            </Grid> 
        </>
    );
}

export default HomePage;