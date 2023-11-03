import {createSlice} from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'Calendar',
  initialState: {startDate: null,endDate:null},
  reducers: {
    selectedStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    selectedEndDate:(state,action)=>{
        state.endDate = action.payload
    }
  },
});

export const {selectedStartDate,selectedEndDate} = calendarSlice.actions;
export default calendarSlice.reducer;
