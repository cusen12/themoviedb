import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectLanguage } from './LanguegeSlice';

function Language() { 
    const dispatch = useDispatch();
    const languages = [
        {
            key:"vn",
            language: "Tiếng Việt",
            menu:
            {
                home: "Trang chủ",
                movie: "Phim",
                tvShow: "Chương trình truyền hình",
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
        {
            key:"en2",
            language: "English2",
            menu:
            {
                home: "home",
                movie: "movie",
                tvShow: "TV Show",
                people: "People"
            }
        }
    ]

    const [lang, setLang] = useState(languages[0]); 
    const handleChangevalue = async (e) =>{  
        await setLang(languages[(e.target.value)]); 
        dispatch(selectLanguage(languages[(e.target.value)]))
    } 
    return (
        <> 
            <h2>{lang.language}</h2>
            <select onChange={handleChangevalue}> 
                {languages.map((data, index) =>
                    <option key={data.key} value={index}>{data.language}</option>
                )} 
            </select>
        </>
    );
}

export default Language;