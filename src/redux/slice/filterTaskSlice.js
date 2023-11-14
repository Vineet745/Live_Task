import {createSlice} from '@reduxjs/toolkit';

export const filterTaskSlice = createSlice({
  name: 'auth',
  initialState: {filteredData: [],studentFilterData:[],classFilterData:[],assignmentFilterData:[]},
  reducers: {
    filteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    studentFilter:(state,action)=>{
      state.studentFilterData = action.payload
    },
    classFilter:(state,action)=>{
      state.classFilterData = action.payload
    },
    assingmentFilter:(state,action)=>{
      state.assignmentFilterData = action.payload
    },
  },
});

export const {filteredData,studentFilter,classFilter,assingmentFilter} = filterTaskSlice.actions;
export default filterTaskSlice.reducer;
