import react from "react"
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";  
import { useEffect } from "react";
import axios from "axios";
import { setPostData } from "../redux/postSlice.js";


function getAllPost(){
    const dispatch=useDispatch()
useEffect(()=>{
const fetchPost=async()=>{
    try{
        const result=await axios.get(`${serverUrl}/api/post/getAll`,{withCredentials:true})
        dispatch(setPostData(result.data))
    }catch(error){
    console.log(error)
}
}
fetchPost()
},[dispatch])
}
      
export default getAllPost;