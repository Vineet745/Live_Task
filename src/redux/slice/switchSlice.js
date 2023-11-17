import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import instance from '../../service/instance';
import { toggleButton } from '../../service/api/homeApi';





export const modalSlice = createSlice({
  name: 'switch',
  initialState: {isEnabled: null},
  reducers: {
    setIsEnabled: (state, action) => {
      state.isEnabled = action.payload;
    },
  },
});

export const {setIsEnabled} = modalSlice.actions;
export default modalSlice.reducer;
