import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import taskCountSlice from "./slice/taskCountSlice"
import filterTaskSlice from "./slice/filterTaskSlice"
import calendarSlice from "./slice/calendarSlice"
import graphDataSlice from "./slice/graphDataSlice"
import modalSlice from "./slice/modalSlice"
import checkBoxSlice from "./slice/checkBoxSlice"
import switchSlice from "./slice/switchSlice"
import dataSlice from "./slice/dataSlice"

export default configureStore({
    reducer:{
        auth:authSlice,
        taskCount:taskCountSlice,
        filter:filterTaskSlice,
        calendar:calendarSlice,
        graph:graphDataSlice,
        modal:modalSlice,
        checkbox:checkBoxSlice,
        switch:switchSlice,
        data:dataSlice
    }
})