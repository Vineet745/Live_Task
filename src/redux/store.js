import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import taskCountSlice from "./slice/taskCountSlice"
import filterTaskSlice from "./slice/filterTaskSlice"
import calendarSlice from "./slice/calendarSlice"
import graphDataSlice from "./slice/graphDataSlice"
import modalSlice from "./slice/modalSlice"
import checkBoxSlice from "./slice/checkBoxSlice"

export default configureStore({
    reducer:{
        auth:authSlice,
        taskCount:taskCountSlice,
        filter:filterTaskSlice,
        calendar:calendarSlice,
        graph:graphDataSlice,
        modal:modalSlice,
        checkbox:checkBoxSlice
    }
})