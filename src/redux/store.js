import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import taskCountSlice from "./slice/taskCountSlice"
import filterTaskSlice from "./slice/filterTaskSlice"

export default configureStore({
    reducer:{
        auth:authSlice,
        taskCount:taskCountSlice,
        filter:filterTaskSlice,
    }
})