import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  error: false,
  user: {},
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    loginFailure: (state) => {
        console.log(state.loading, state.error);
        state.error = true;
        if(state.error)toast.error('משהו השתבש אנא נסה שנית',{
            position: toast.POSITION.BOTTOM_CENTER
        })
        state.loading = false;
    },
    getUser: (state, action) => {
        state.user = action.payload;
        state.loading = false;
        if(state.loading)toast.success('ברוך הבא',{
            position: toast.POSITION.BOTTOM_CENTER
        })
        // return state.user;
    },
    removeUser: (state) => {
      state.user = {};
      state.loading = false;
      state.error = false;
    },
  },
});

export const { getUser, removeUser, loginStart, loginFailure } = userSlice.actions;
export default userSlice.reducer;
