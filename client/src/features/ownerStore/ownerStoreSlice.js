import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStoreApi, getStoreProductsApi } from './ownerStoreService';
const initialState = {
  bnNumber: '',
  name: '',
  description: '',
  lightlogo: '',
  darklogo: '',
  coverImage: '',
  phone: '',
  email: '',
  departmentIds: [],
  address: {
    city: '',
    street: '',
    building: '',
    apartment: '',
  },
  // products: [],
};

export const getStores = createAsyncThunk(
  'ownerStore/getStore',
  async (payload) => {
    try {
      const data = getStoreApi(payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStoreProducts = createAsyncThunk(
  'ownerStore/getStoreProducts',
  async (payload) => {
    try {
      const data = getStoreProductsApi();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const storeSlice = createSlice({
  name: 'ownerStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStores.pending, (state) => {})
      .addCase(getStores.fulfilled, (state, action) => {
        state = action.payload;
        console.log(state);
      })
      .addCase(getStores.rejected, (action) => {
        console.log(action);
      });
  },
});

export default storeSlice.reducer;
