import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import ownerStore from '../features/ownerStore/ownerStoreSlice';
import produceReducer from '../features/product/produceSlice';

export const store = configureStore({
  reducer: {
    product: produceReducer,
    cart: cartReducer
  },
});
