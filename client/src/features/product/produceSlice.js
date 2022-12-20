import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
