import { configureStore } from '@reduxjs/toolkit'
import AppReducer from './reducer'
import userSlice from './userSlice'
export  const store = configureStore({
    reducer : {
        auth : userSlice
    }
})