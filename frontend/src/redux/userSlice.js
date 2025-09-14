import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null
    },
reducers:{
    setUserData:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.userData = action.payload
    }
}
})
export const {setUserData}=userSlice.actions
export default userSlice.reducer