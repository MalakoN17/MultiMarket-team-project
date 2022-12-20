import { configureStore } from '@reduxjs/toolkit';
import ownerStore from '../features/ownerStore/ownerStoreSlice';
import produceReducer from '../features/product/produceSlice';
import cityReducer from "../features/city/citySlice"
export const store = configureStore({
  reducer: {
    product: produceReducer,
    ownerStore: ownerStore,
    city:cityReducer
    
  },
});
