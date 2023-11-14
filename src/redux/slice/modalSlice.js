import {createSlice} from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'auth',
  initialState: {isOpen: false},
  reducers: {
    modalOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {modalOpen} = modalSlice.actions;
export default modalSlice.reducer;
