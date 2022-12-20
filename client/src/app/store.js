import { configureStore } from '@reduxjs/toolkit';
import produceReducer from '../features/product/produceSlice'; 

export const store = configureStore({
  reducer: {
    product: produceReducer
    },
});
