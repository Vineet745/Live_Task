import {createSlice} from '@reduxjs/toolkit';

export const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {selectedValue: [],radioSelected:null, radioSelectedTask:null},
  reducers: {
    selectedCheckBox: (state, action) => {
      state.selectedValue = action.payload;
    },
    selectedRadioButton: (state, action) => {
      state.radioSelected = action.payload;
    },
    selectedRadioTask: (state, action) => {
      state.radioSelectedTask = action.payload;
    },
  },
});

export const {selectedCheckBox,selectedRadioButton,selectedRadioTask} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
