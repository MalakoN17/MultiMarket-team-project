import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        getUser:(state, action)=>{
            state = action.payload;
            return state;
        }
    }
})

export const {getUser} = userSlice.actions;
export default userSlice.reducer