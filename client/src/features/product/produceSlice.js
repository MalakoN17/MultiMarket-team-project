import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
  addProduct: {}
};

// Create new Product
export const createProduct = createAsyncThunk('product/create', async (productData, thunkAPI) => {
  try {
    return await productService.createProduct(productData,)
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
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.addProduct = (action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
