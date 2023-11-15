import {createSlice} from '@reduxjs/toolkit';

export const filterTaskSlice = createSlice({
  name: 'auth',
  initialState: {filteredData: [],studentFilterData:[],classFilterData:[],assignmentFilterData:[],filteredTaskData:[]},
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
    taskFilter:(state,action)=>{
      state.filteredTaskData = action.payload
    },
  },
});

export const {filteredData,studentFilter,classFilter,assingmentFilter,taskFilter} = filterTaskSlice.actions;
export default filterTaskSlice.reducer;
