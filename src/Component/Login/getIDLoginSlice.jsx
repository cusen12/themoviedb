import { createSlice } from '@reduxjs/toolkit'

export const getIDLoginSlice = createSlice({
  name: 'getIDLogin',
  initialState: {}
  , 
  reducers: {
    getIDLogin: (state, actions) => { 
        state.value = actions.payload; 
    }   
  },
})
 
export const { getIDLogin } = getIDLoginSlice.actions

export default getIDLoginSlice.reducer