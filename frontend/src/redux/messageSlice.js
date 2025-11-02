import {createSlice} from "@reduxjs/toolkit"
const messageSlice=createSlice({
    name:"message",
    initialState:{
       selectedUser:null,
       messages:[],
       prevChatUsers:null
       
    },
reducers:{
    setSelectedUser:(state,action) =>{               //this will store the data of the user when they will signup
    state.selectedUser = action.payload
    } ,
    
    setMessages:(state,action) =>{           
    state.messages = action.payload
    }  ,
     setPrevChatUsers:(state,action) =>{           
    state.prevChatUsers = action.payload
    }  
}
})
export const { setSelectedUser,setMessages,setPrevChatUsers}=messageSlice.actions
export default messageSlice.reducer