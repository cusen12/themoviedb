import { createSlice } from '@reduxjs/toolkit'

export const guestSessionSlice = createSlice({
  name: 'guestSession',
  initialState: {}
  , 
  reducers: {
    guestSession: (state, actions) => { 
        state.value = actions.payload; 
    }   
  },
})
 
export const { guestSession } = guestSessionSlice.actions

export default guestSessionSlice.reducer