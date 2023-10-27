import { createSlice } from "@reduxjs/toolkit";

export const userSlice =  createSlice({
    name : "Auth",
    initialState : {
        value : {}
    },
    reducers : {
        authenticate : (state,action) => {
            state.value = action.payload;
        }
    }
});


export const { authenticate } = userSlice.actions

export default userSlice.reducer