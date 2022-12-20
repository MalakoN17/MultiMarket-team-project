import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStoreApi, getStoreProductsApi } from './ownerStoreService';
const initialState = {
  nameStore: '',
  image: '',
  products: [],
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
    builder.addCase(getStores.pending, (state) => {});
    builder.addCase(getStores.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getStores.rejected, (action) => {});
  },
});

export default storeSlice.reducer;
