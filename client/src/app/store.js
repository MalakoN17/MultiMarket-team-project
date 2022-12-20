import { configureStore } from '@reduxjs/toolkit';
import produceReducer from '../features/product/produceSlice'; 
import loginDisplayReducer from '../features/loginDisplaySlice';

export const store = configureStore({
  reducer: {
    product: produceReducer,
    loginDisplay:loginDisplayReducer
  },
});
