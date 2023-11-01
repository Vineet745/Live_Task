import {createSlice} from '@reduxjs/toolkit';

export const taskCountSlice = createSlice({
  name: 'auth',
  initialState: {count: null},
  reducers: {
    viewCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {viewCount} = taskCountSlice.actions;
export default taskCountSlice.reducer;
