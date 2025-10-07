import react from "react"
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData,setFollowing } from "../redux/userSlice";   
import { useEffect } from "react";
import axios from "axios";

function getCurrentUser(){
    const dispatch=useDispatch()
useEffect(()=>{
const fetchUser=async()=>{
    try{
        const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
        dispatch(setUserData(result.data))
        dispatch(setFollowing(result.data.following))
    }catch(error){
    console.log(error)
}
}
fetchUser()
},[])
}
      
export default getCurrentUser;