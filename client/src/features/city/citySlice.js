import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cityValue: 'שוהם',
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    clearSelect: (state) => {
      state.cityValue = initialState;
    },
    settingSelect: (state, action) => {
      state.cityValue = action.payload;
    },
  },
});
export const { clearSelect, settingSelect } = citySlice.actions;

export default citySlice.reducer;
