import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  city: '',
  street: '',
  building: '',
  postalCode: 0,
  apartment: 0,
  comment: '',
  delivery: {},
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
        console.log(action.payload);
      state.city = action.payload.city;
      state.street = action.payload.street;
      state.building = action.payload.building;
      state.postalCode = action.payload.postalCode;
      state.apartment = action.payload.apartment;
      state.comment = action.payload.comment;
    },
    addDelivery:(state, action) =>{
      state.delivery = action.payload;
    },
    clearAddress: (state, action) => {
      state.city = '';
      state.street = '';
      state.building = ''; 
      state.postalCode = 0;
      state.apartment =0;
      state.comment = '';
      state.delivery = '';
    },
  },
});

export const { addAddress, clearAddress, addDelivery } = addressSlice.actions;
export default addressSlice.reducer;
