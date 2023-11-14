import {createSlice} from '@reduxjs/toolkit';

export const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {selectedValue: []},
  reducers: {
    selectedCheckBox: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
});

export const {selectedCheckBox} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
