import { configureStore } from '@reduxjs/toolkit';
import produceReducer from '../features/product/produceSlice'; 
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    product: produceReducer,
    user:userSlice
    },
});
