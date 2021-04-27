import { createSlice } from '@reduxjs/toolkit'

export const selectLanguageSlice = createSlice({
  name: 'selectLanguage',
  initialState: {
    value: {
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
  },
  reducers: {
    selectLanguage: (state, actions) => { 
        state.value = actions.payload
    }
  },
})
 
export const { selectLanguage } = selectLanguageSlice.actions

export default selectLanguageSlice.reducer