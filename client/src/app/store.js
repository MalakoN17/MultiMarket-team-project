import { configureStore } from '@reduxjs/toolkit';
import produceReducer from '../features/product/produceSlice'; 
import cartReducer from '../features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    product: produceReducer,
    cart:cartReducer 
  },
});
