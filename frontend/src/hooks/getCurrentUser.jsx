import react from "react"
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";   
import { useEffect } from "react";
import axios from "axios";
function getCurrentUser(){
    const dispatchEvent=useDispatch()
useEffect(()=>{
const fetchUser=async()=>{
    try{
        const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
        dispatchEvent(setUserData(result.data))
    }catch(error){
    console.log(error)
}
}
fetchUser()
},[])
}
      
export default getCurrentUser;