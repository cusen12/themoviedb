import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectLanguage } from './LanguegeSlice';

function Language() { 
    const style={
        position:"absolute",
        top:"20px",
        right:"20px",
        padding:"3px",
        outline:"0",
        border:"0"
    }
    const dispatch = useDispatch();
    const languages = [
        {
            key:"vn",
            language: "Tiếng Việt",
            menu:
            {
                home: "Trang chủ",
                movie: "Phim",
                tvShow: "Chương trình TV",
                people: "Nhân vật"
    
            }
        },
        {
            key:"en",
            language: "English",
            menu:
            {
                home: "home",
                movie: "movie",
                tvShow: "TV Show",
                people: "People"
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
                <select onChange={handleChangevalue} > 
                    {languages.map((data, index) =>
                        <option key={data.key} value={index}>{data.language}</option>
                    )} 
                </select>
            </div>
        </>
    );
}

export default Language;