import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  error: false,
  user: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginFailure: (state) => {
        console.log(state.loading, state.error);
      state.loading = false;
      state.error = true;
      if(state.error)toast.error('משהו השתבש אנא נסה שנית',{
        position: toast.POSITION.BOTTOM_CENTER
    })
    },
    getUser: (state, action) => {
        console.log(state.user, action.payload);
      state.user = action.payload;
      state.loading = false;
      if(state.loading)toast.success('ברוך הבא',{
        position: toast.POSITION.BOTTOM_CENTER
    })
      return state.user;
    },
    removeUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getUser, removeUser, loginStart, loginFailure } = userSlice.actions;
export default userSlice.reducer;
