import {createSlice} from '@reduxjs/toolkit'

export const loginDisplaySlice = createSlice(
    {
      name:"loginDisplay",
      initialState:{value: true},
      reducers:{
        // // function to show login pop up
        // showLogin:(state, action)=>{
        //     state.value = action.payload
        //     // console.log(state.value);
        // }
      }
    }
)

export const {showLogin} = loginDisplaySlice.actions;
export default loginDisplaySlice.reducer;