import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStoreApi, getStoreProductsApi, updateStoreApi, getDepartmentsApi,createStoreApi, deleteStoreApi, updateOwnerStoreApi } from './ownerStoreService';
const initialState = {
  store: {},
  isLoading:false,
  isLogin: false,
  isSuccuss:false,
  products: [],
  departmentIds:[]
};

export const getStore = createAsyncThunk(
  'ownerStore/getStore',
  async (payload, thunkAPI) => {
    try {
      const data = await getStoreApi(payload);
      return data;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);
export const createStore = createAsyncThunk(
  'ownerStore/createStore',
  async (payload, thunkAPI) => {
    try {
      payload.bnNumber = +payload.bnNumber
      payload.building = +payload.building
      payload.apartment = +payload.apartment
      console.log(payload);
      const data = await createStoreApi(payload);
      return data;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);


export const getStoreProducts = createAsyncThunk(
  'ownerStore/getStoreProducts',
  async (storeId, thunkAPI) => {
    try {
      const data = await getStoreProductsApi(storeId);
      return data;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);

export const updateStore = createAsyncThunk(
  'ownerStore/updateStore',
  async (store, thunkAPI) => {
    const {id} = store
    try {
      console.log(store);
      const data = await updateStoreApi(id,store);
      return data;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);
export const deleteStore = createAsyncThunk(
  'ownerStore/deleteStore',
  async (storeId, thunkAPI) => {
    try {
      const data = await deleteStoreApi(storeId);
      return data;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);
export const getDepartments = createAsyncThunk('ownerStore/getDepartments', async (thunkAPI)=>{
  try {
    const data = await getDepartmentsApi()
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
});

export const updateOwnerStore = createAsyncThunk('ownerStore/updateOwnerStore', async(owner, thunkAPI)=>{
  try {
    console.log(owner._id);
    const id = owner._id
    const date = await updateOwnerStoreApi(id, owner)
    return date
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

const storeSlice = createSlice({
  name: 'ownerStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccuss = true
        state.store = (action.payload);
      })
      .addCase(getStore.rejected, (state,action) => {
        state.isLoading = false;
        state.isSuccuss = false;
      })
      .addCase(createStore.pending, (state, action)=>{
        state.isLoading = true
      })
      .addCase(createStore.fulfilled, (state, action)=>{
        state.isLoading = false
        console.log(action.payload);
      })
      .addCase(createStore.rejected, (state, action)=>{
        state.isLoading = false
        console.log(action.payload);
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
        state.store = (action.payload)
      })
      .addCase(updateOwnerStore.fulfilled, (state, action)=>{
        console.log(action.payload);
      })
      .addCase(updateOwnerStore.rejected, (state, action)=>{
        console.log(action.payload);
      })
      .addCase(getDepartments.fulfilled, (state, action)=>{
        state.departmentIds = action.payload
      })
      .addCase(getDepartments.rejected, (state, action)=>{
        console.log(action.payload);
      })
  },
});
export const {updateStoreRdu} = storeSlice.actions
export default storeSlice.reducer;
