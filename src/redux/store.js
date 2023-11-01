import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import taskCountSlice from "./slice/taskCountSlice"

export default configureStore({
    reducer:{
        auth:authSlice,
        taskCount:taskCountSlice
    }
})