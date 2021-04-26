import { configureStore } from '@reduxjs/toolkit'
import selectLanguageSliceReducer from '../Component/Language/LanguegeSlice';
import { persistReducer } from 'redux-persist';
import {combineReducers} from "redux"; 
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

 
const reducers = combineReducers({
  reducer: selectLanguageSliceReducer,             
 });
const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});