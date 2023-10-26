import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {token: null},
  reducers: {
    authToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {authToken} = authSlice.actions;
export default authSlice.reducer;
