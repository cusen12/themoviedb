import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectLanguage } from './LanguegeSlice';

function Language() { 
    const style={
        position:"fixed",
        bottom:"20px",
        right:"20px",
        zIndex:"100",
        
    }
    const styleselect={ 
        padding:"5px",
        outline:"0",
        border:"0",
        background:"#000",
        color:"#ffffff",
        cursor:"pointer"
    }
    const dispatch = useDispatch();
    const languages = [  
        {
            key:"vn",
            language: "Tiếng Việt", 
            menu:
            {
                home: "Home",
                movie: "Movie",
                tvShow: "TV Show",
                people: "People"
            },
            hero:{
                welcome: "Welcome!!!",
                destription: "Millions of movies, TV shows and people to discover. Explore now.",
                search:"Search"
            },
            footer:{
                contact:"Contact us",
                links:[                     
                    {
                        link:"/",
                        typeLink:"1",
                        text: "Home",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"2",
                         text: "Investor Relations",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"3",
                         text:"Privacy",
                     }, 
                     {
                         link:"/commingsoon",
                         typeLink:"6",
                         text:"Jobs",
                     },
                     {
                        link:"/movie",
                        typeLink:"4",
                        text:"movie",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"7",
                         text: "Cookie Preferences",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"8",
                         text: "Legal Notices",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"9",
                         text: "Account",
                     },
                     {
                         link:"/tvshow",
                         typeLink:"10",
                         text:"TV Show",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"11",
                         text:"Corporate Information", 
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"12",
                         text: "Media Center",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"13",
                         text:"Terms of Use",
                     },
                     {
                         link:"/people",
                         typeLink:"14",
                         text: "People",
                     }
                ]
                
            }
        },
        {
            key:"en",
            language: "English",
            menu:
            {
                home: "Home",
                movie: "Movie",
                tvShow: "TV Show",
                people: "People"
            },
            hero:{
                welcome: "Welcome!!!",
                destription: "Millions of movies, TV shows and people to discover. Explore now.",
                search:"Search"
            },
            footer:{
                contact:"Contact us",
                links:[                     
                    {
                        link:"/",
                        typeLink:"1",
                        text: "Home",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"2",
                         text: "Investor Relations",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"3",
                         text:"Privacy",
                     }, 
                     {
                         link:"/commingsoon",
                         typeLink:"6",
                         text:"Jobs",
                     },
                     {
                        link:"/movie",
                        typeLink:"4",
                        text:"movie",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"7",
                         text: "Cookie Preferences",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"8",
                         text: "Legal Notices",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"9",
                         text: "Account",
                     },
                     {
                         link:"/tvshow",
                         typeLink:"10",
                         text:"TV Show",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"11",
                         text:"Corporate Information", 
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"12",
                         text: "Media Center",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"13",
                         text:"Terms of Use",
                     },
                     {
                         link:"/people",
                         typeLink:"14",
                         text: "People",
                     }
                ]
                
            }
        },
    ]
 
    const [lang, setLang] = useState(languages[0]);  
    const handleChangevalue = async (e) =>{  
        await setLang(languages[(e.target.value)]); 
        dispatch(selectLanguage(languages[(e.target.value)])) 
    } 
    return (
        <>  
            <div style={style}>
                <label style={{display:"none"}}>{lang.key}</label>
                <select onChange={handleChangevalue} style={styleselect}> 
                    {languages.map((data, index) =>
                        <option key={data.key} value={index}>{data.language}</option>
                    )} 
                </select>
            </div>
        </>
    );
}

export default Language;