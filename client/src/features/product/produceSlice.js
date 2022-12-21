import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createProductToStoreApi} from './productetService'

const initialState = {

  barcode: '',
  image: '',
  name: '',
  price: 0,
  priority: 0,
  description: '',
  message: '',
};

export const uploadProduct = createAsyncThunk('product/uploadProduct', async (product,thunkAPI)=>{
  try {
    product.price = +product.price
    product.priority = +product.priority
    product.units = +product.units
    const data = createProductToStoreApi(product)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
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
      const { name, image, price, priority, description, barcode } =
        action.payload;
      //  state = [...state, action.payload];
      state.name = name;
      state.barcode = barcode;
      state.image = image;
      state.price = price;
      state.priority = priority;
      state.description = description;
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(uploadProduct.fulfilled,(state, action)=>{
      console.log(action.payload);
    })
  }
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
