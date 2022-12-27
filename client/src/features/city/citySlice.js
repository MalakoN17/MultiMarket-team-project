import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cityValue:' ',
  show:false
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    clearSelect: (state) => {
      console.log(initialState);
      state.cityValue = initialState;
      state.show = false
    },
    settingSelect: (state, action) => {
      console.log(state.cityValue = action.payload);
      state.cityValue = action.payload
      state.show = true
    },
    changeSelect:(state)=>{
      state.show = !state.show
    }
  

  },
});
export const { clearSelect, settingSelect,changeSelect } = citySlice.actions;

export default citySlice.reducer;
