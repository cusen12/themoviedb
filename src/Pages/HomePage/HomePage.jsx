import { Container, Grid } from '@material-ui/core'; 
import React, { Suspense } from 'react'; 
import './HomePage.scss';  

const ListMovie = React.lazy(()=> import('../../Component/ListMovie/ListMovie')); 
const ListTVShow = React.lazy(()=> import('../../Component/ListTVShow/ListTVShow'));
const PeopleList = React.lazy(()=> import('../../Component/PeopleList/PeopleList'));

function HomePage() {   
    return ( 
        <Grid className="homepage"> 
                <Suspense fallback={<div>Loading...</div>}> 
                <Container>  
                    <ListMovie/>
                    <ListTVShow/>
                    <PeopleList/>  
                </Container> 
            </Suspense> 
        </Grid>  
    );
}

export default HomePage;