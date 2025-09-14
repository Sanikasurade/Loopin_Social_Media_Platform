import {createSlice} from "@reduxjs/toolkit"
import { suggestedUsers } from "../../../backend/controllers/user.controllers"
const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null,
        suggestedUsers:null
    },
reducers:{
    setUserData:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.userData = action.payload
    },
    setSuggestedUsers:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.suggestedUsers = action.payload
    }, 
}
})
export const {setUserData,setSuggestedUsers}=userSlice.actions
export default userSlice.reducer