import {createSlice} from '@reduxjs/toolkit';

export const graphDataSlice = createSlice({
  name: 'graphSlice',
  initialState: {graphData: []},
  reducers: {
    graphFilterData: (state, action) => {
      state.graphData = action.payload;
    },
  },
});

export const {graphFilterData} = graphDataSlice.actions;
export default graphDataSlice.reducer;
