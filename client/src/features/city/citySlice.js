import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cityValue: '',
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    clearSelect: (state) => {
      console.log(initialState);
      state.cityValue = initialState;
    },
    settingSelect: (state, action) => {
      state.cityValue = action.payload

    },
  },
});
export const { clearSelect, settingSelect } = citySlice.actions;

export default citySlice.reducer;
