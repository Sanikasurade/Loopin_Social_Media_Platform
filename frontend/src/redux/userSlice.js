import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null,
        suggestedUsers:null,
        profileData:null
    },
reducers:{
    setUserData:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.userData = action.payload
    },
    setSuggestedUsers:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.suggestedUsers = action.payload
    }, 
     setProfileData:(state,action) =>{               //this will store the data otf the user when they wil signup
    state.profileData = action.payload
    },
}
})
export const {setUserData,setSuggestedUsers,setProfileData}=userSlice.actions
export default userSlice.reducer