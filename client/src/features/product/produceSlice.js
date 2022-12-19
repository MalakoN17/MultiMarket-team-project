import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  barcode: '',
  image: '',
  name: '',
  price: 0,
  priority: 1,
  description: '',
  productTag: '',
  measureUnits: '',
  weight: 0,
  unit:0,
  manufacturer: '',
  parallelImporter: false,
  kosherType: '',
  subcategory: '',
  message: '',
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state = initialState
    },
    settingProduct: (state, action) => {
      const { name, image, price, priority, description, barcode, kosherType, productTag, parallelImporter, manufacturer, subcategory } = action.payload;

      state.name = name;
      state.barcode = barcode;
      state.image = image;
      state.price = price;
      state.priority = priority;
      state.description = description;
      state.kosherType = kosherType;
      state.productTag = productTag;
      state.manufacturer = manufacturer;
      state.parallelImporter = parallelImporter;
      state.kosherType = kosherType;
      state.subcategory = subcategory;
    }
  },

});

// console.log(productSlice);
export const { clearProduct, settingProduct } = productSlice.actions;

export default productSlice.reducer;