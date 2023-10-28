import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "./state";

export const userSlice =  createSlice({
    name : "Auth",
    initialState : {
        value : getInitialState()
    },
    reducers : {
        authenticate : (state,action) => {
            state.value = action.payload;
        }
    }
});


export const { authenticate } = userSlice.actions

export default userSlice.reducer