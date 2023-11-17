import {createSlice} from '@reduxjs/toolkit';

export const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {selectedValue: [],radioSelected:null, radioSelectedTask:null,creditAmount:null},
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
    selectedCreditAmount: (state, action) => {
      state.creditAmount = action.payload;
    },
  },
});

export const {selectedCheckBox,selectedRadioButton,selectedRadioTask,selectedCreditAmount} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
