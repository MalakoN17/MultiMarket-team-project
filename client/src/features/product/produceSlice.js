import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  barcode: '',
  image: '',
  name: '',
  price: 0,
  priority: 0,
  description: '',
  message: '',
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
});

export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;
