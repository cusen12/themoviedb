import { createSlice } from '@reduxjs/toolkit'

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {}
  , 
  reducers: {
    section: (state, actions) => { 
        state.value = actions.payload; 
    }
  },
})
 
export const { section} = sectionSlice.actions

export default sectionSlice.reducer