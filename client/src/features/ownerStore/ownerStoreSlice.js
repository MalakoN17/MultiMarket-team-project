import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStoreApi, getStoreProductsApi, updateStoreApi, getDepartmentsApi,createStoreApi, deleteStoreApi, updateOwnerStoreApi, updateProductToStoreApi, createProductToStoreApi, deleteProductToStoreApi } from './ownerStoreService';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const initialState = {
  store: {},
  isLogin: false,
  addProduct: {},
  isLoading:false,
  isSuccess:false,
  isError:false,
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

export const createProduct = createAsyncThunk('ownerStore/uploadProduct', async (product,thunkAPI)=>{
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
export const updateProductSlice = createAsyncThunk('ownerStore/updateProductSlice', async (product,thunkAPI)=>{
  try {
    product.price = +product.price
    product.priority = +product.priority
    product.units = +product.units
    product.productStock = +product.productStock
    const data = updateProductToStoreApi(product, product._id)
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
export const deleteProductStore = createAsyncThunk('ownerStore/deleteProductStore', async (product,thunkAPI)=>{
  try {
   console.log(product._id);
    const data = deleteProductToStoreApi(product._id)
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

const storeSlice = createSlice({
  name: 'ownerStore',
  initialState,
  reducers: {
    removeProduct:(state,action)=>{
      state.products  = state.products.filter(product=> product._id !== action.payload._id)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.store = (action.payload);
      })
      .addCase(getStore.rejected, (state,action) => {
        state.isLoading = false;
      })
      .addCase(createStore.pending, (state, action)=>{
        state.isLoading = true
      })
      .addCase(createStore.fulfilled, (state, action)=>{
        state.isLoading = false
      })
      .addCase(createStore.rejected, (state, action)=>{
        state.isLoading = false
      })
      .addCase(getStoreProducts.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getStoreProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = (action.payload);
      })
      .addCase(getStoreProducts.rejected, (state,action) => {
        state.isLoading = false;
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
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        toast.success('מוצר נוסף בהצלחה', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        state.addProduct = (action.payload);
        state.products.push(action.payload)
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        
      })
      .addCase(updateProductSlice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProductSlice.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products.push(action.payload)
      })
      .addCase(updateProductSlice.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProductStore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProductStore.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        
      })
      .addCase(deleteProductStore.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});
export const {updateStoreRdu, removeProduct} = storeSlice.actions
export default storeSlice.reducer;
