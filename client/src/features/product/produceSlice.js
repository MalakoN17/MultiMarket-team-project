
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createProductToStoreApi} from './productetService'


const initialState = {
  addProduct: {}
};


export const uploadProduct = createAsyncThunk('product/uploadProduct', async (product,thunkAPI)=>{
  try {
    product.price = +product.price
    product.priority = +product.priority
    product.units = +product.units
    product.productStock = +product.productStock
    const data = createProductToStoreApi(product)
    return data
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString()
  return thunkAPI.rejectWithValue(message)
  }
})



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
    builder
      // Create product
      .addCase(uploadProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(uploadProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.addProduct = (action.payload);
      })
      .addCase(uploadProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

  }
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
