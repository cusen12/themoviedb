import { createSlice } from '@reduxjs/toolkit'

export const selectLanguageSlice = createSlice({
  name: 'selectLanguage',
  initialState: {
    value: {
      "key": "vn",
      "language": "Tiếng Việt",
      "menu": {
        "home": "Trang chủ",
        "movie": "Phim",
        "tvShow": "Chương trình truyền hình",
        "people": "Nhân vật"
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