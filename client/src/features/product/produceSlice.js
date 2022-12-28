
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createProductToStoreApi, updateProductToStoreApi} from './productetService'


const initialState = {
  products:[],
  addProduct: {},
  isLoading:false,
  isSuccess:false,
  isError:false,
  message:'',
  updateProduct:{}
};






const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state = initialState;
    },
    settingProduct: (state, action) => {
      state.addProduct = (action.payload);
    },
  },

  extraReducers: (builder) => {
  }
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
