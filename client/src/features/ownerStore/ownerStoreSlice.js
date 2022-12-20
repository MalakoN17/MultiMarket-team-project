import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStoreApi, getStoreProductsApi, updateStoreApi } from './ownerStoreService';
const initialState = {
  store: {},
  isLoading:false,
  isLogin: false,
  isSuccuss:false,
  products: [],
};

export const getStores = createAsyncThunk(
  'ownerStore/getStore',
  async (payload, thunkAPI) => {
    try {
      const data = getStoreApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getStoreProducts = createAsyncThunk(
  'ownerStore/getStoreProducts',
  async (storeId, thunkAPI) => {
    try {
      const data = getStoreProductsApi(storeId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateStore = createAsyncThunk(
  'ownerStore/updateStore',
  async (store, thunkAPI) => {
    const {id} = store
    try {
      const data = updateStoreApi(id,store);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const storeSlice = createSlice({
  name: 'ownerStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStores.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStores.fulfilled, (state, action) => {
      
        state.isLoading = false;
        state.isSuccuss = true
        state.store = (action.payload);
      })
      .addCase(getStores.rejected, (state,action) => {
        state.isLoading = false;
        state.isSuccuss = false;
      })
      .addCase(getStoreProducts.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getStoreProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccuss = true
        state.products = (action.payload);
      })
      .addCase(getStoreProducts.rejected, (state,action) => {
        state.isLoading = false;
        state.isSuccuss = false
      })
      .addCase(updateStore.fulfilled, (state, action)=>{
        console.log(action);
      })
  },
});

export default storeSlice.reducer;
