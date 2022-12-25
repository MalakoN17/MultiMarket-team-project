import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        getUser:(state, action)=>{
            state = action.payload;
            return state;
        },
        removeUser:(state)=>{
            state = {};
            return state;
        }
    }
})

export const {getUser, removeUser} = userSlice.actions;
export default userSlice.reducer