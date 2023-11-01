import {createSlice} from '@reduxjs/toolkit';

export const filterTaskSlice = createSlice({
  name: 'auth',
  initialState: {filteredData: []},
  reducers: {
    filteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const {filteredData} = filterTaskSlice.actions;
export default filterTaskSlice.reducer;
