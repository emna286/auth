import {configureStore}from '@reduxjs/toolkit';
import authSlice from './redux/slice/authSlice';
import authReducer from './redux/slice/authSlice'
export const store=configureStore({
reducer:{
    auth:authReducer.reducer
}

})