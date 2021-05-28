import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    success: false,
    expires_at: "",
    request_token: ""
}
  , 
  reducers: {
    login: (state, actions) => { 
        state.value = actions.payload;
        
    },
    logout: (state) => { 
      state.value = {
        success: false,
        expires_at: "",
        request_token: ""
      }   
    }, 
  },
})
 
export const { login,logout } = loginSlice.actions

export default loginSlice.reducer