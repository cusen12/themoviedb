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
                home: "Trang chủ",
                movie: "Phim",
                tvShow: "Chương trình TV",
                people: "Nhân vật"
    
            },
            hero:{
                welcome: "Xin chào!!!",
                destription: "Hàng triệu bộ phim, chương trình truyền hình và mọi người để khám phá. Khám phá ngay bây giờ.",
                search:"Tìm kiếm"
            },
            footer:{
                contact:"Liên hệ với chúng tôi",
                links: [
                    {
                       link:"/commingsoon",
                       typeLink:"1",
                       text: "Câu hỏi thường gặp",
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"3",
                        text: "Quan hệ với nhà đầu tư",
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"3",
                        text:"Quyền riêng tư", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"4",
                        text:"Kiểm tra tốc độ", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"5",
                        text:"Trung tâm trợ giúp", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"6",
                        text: "Việc làm", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"7",
                        text: "Tùy chọn cookie", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"8",
                        text:"Thông báo pháp lý",
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"9",
                        text: "Tài khoản", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"10",
                        text: "Các cách xem", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"11",
                        text: "Thông tin doanh nghiệp",  
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"12",
                        text: "Trung tâm đa phương tiện", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"13",
                        text: "Điều khoản sử dụng", 
                    },
                    {
                        link:"/commingsoon",
                        typeLink:"14",
                        text: "Liên hệ với chúng tôi"
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
                        link:"/commingsoon",
                        typeLink:"1",
                        text: "FAQ",
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
                         typeLink:"4",
                         text:"Speed Test",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"5",
                         text:"Help Center",
                     },
                     {
                         link:"/commingsoon",
                         typeLink:"6",
                         text:"Jobs",
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
                         link:"/commingsoon",
                         typeLink:"10",
                         text:"Ways to Watch",
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
                         link:"/commingsoon",
                         typeLink:"14",
                         text: "Contact Us",
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