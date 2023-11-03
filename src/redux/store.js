import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import taskCountSlice from "./slice/taskCountSlice"
import filterTaskSlice from "./slice/filterTaskSlice"
import calendarSlice from "./slice/calendarSlice"
import graphDataSlice from "./slice/graphDataSlice"

export default configureStore({
    reducer:{
        auth:authSlice,
        taskCount:taskCountSlice,
        filter:filterTaskSlice,
        calendar:calendarSlice,
        graph:graphDataSlice,
    }
})