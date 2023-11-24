import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import instance from '../../service/instance';
import { toggleButton } from '../../service/api/homeApi';





export const dataSlice = createSlice({
  name: 'data',
  initialState: {fetch: false},
  reducers: {
    setIsFetched: (state, action) => {
      state.fetch = action.payload;
    },
  },
});

export const {setIsFetched} = dataSlice.actions;
export default dataSlice.reducer;
