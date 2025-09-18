import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setProfileData,setUserData } from '../redux/userSlice';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {serverUrl} from '../App.jsx';
import { IoArrowBackOutline } from "react-icons/io5";



function Profile(){
    const {userName}=useParams();
    const dispatch=useDispatch();
    const {profileData}=useSelector(state=>state.user);
    const handleProfile=async()=>{
        try{
            const result=await axios.get(`${serverUrl}/api/user/getProfile/${userName}`,{withCredentials:true})
          dispatch(setProfileData(result.data))
        }catch(error){
            console.log(error)
            
    }
    }
       // Logout handler function
        const handleLogOut = async () => {
            try {
                // API call to backend to log out the user (clears session/cookies)
                const result = await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true });
                
                // After successful logout, clear user data from Redux store
                dispatch(setUserData(null));
                dispatch(setProfileData(null));

                // Redirect to login page
                navigate("/login");

            } catch (error) {
                // If logout fails, print error in console
                console.log(error);
            }
        }

useEffect(()=>{
    handleProfile();
},[userName,dispatch])
return (
<div className='w-full min-h-screen bg-black'>
  <div className='w-full h-[80px] flex justify-between items-center px-[30px] text-white gap-[20px]'>
  <div>
       <IoArrowBackOutline  className='text-white w-[25px] h-[25px] cursor-pointer'/>
   </div>
<div className='font-semibold text-[20px]'> {profileData?.userName || "Loading..."}</div>
<div className='font-semibold text-[15px] cursor-pointer text-blue-500' onClick={handleLogOut}>Log Out
  </div>
</div>   
</div>
)
}
export default Profile; 
