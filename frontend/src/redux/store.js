import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice.js"
import postSlice from "./postSlice.js"
import loopSlice from "./loopSlice.js"
import messageSlice from "./messageSlice.js"

const store=configureStore({
    reducer:({
        user:userSlice,
        post:postSlice,
        loop:loopSlice, 
        message:messageSlice
    })

})
export default store;