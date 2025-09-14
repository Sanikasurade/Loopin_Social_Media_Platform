import React from 'react';
import logo1 from '../assets/logo1.png'
import { FaRegHeart } from "react-icons/fa";
import dp1 from '../assets/dp.jpg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import axios from 'axios';
import { serverUrl } from "../App.jsx";
function LeftHome() {


    const {userData}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const handleLogOut=async()=>{
        try{
            const result= await axios.get(`${serverUrl}/api/auth/signout`,{withCredentials:true})
            dispatch(setUserData(null))
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="w-[25%] hidden lg:block min-h-[100vh] bg-[black]
         border-r-2 border-gray-900">
            <div className="w-full flex items-center justify-between p-[20px]">
                <img src={logo1} alt="" className='w-[150px]' />
                <div>
                     </div>  
                    <FaRegHeart className='text-white w-[25px] h-[25px]'/>
                </div>
                <div className='flex items-center mt-[10px] w-full justify-between  gap-[10px] px-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                    <div className='w-[70px] h-[70px] border-2 border-black
                     rounded-full cursor-pointer overflow-hidden'> 
                        <img src={ userData.profileImage || dp1} alt="" className='w-full object-cover'/>
                    </div>
                    <div >
                        <div className='text-[18px] text-white font-semibold'>{userData.userName}</div>
                        <div className='text-[18px] text-gray-400 font-semibold'>{userData.name}</div>
                    </div>
              </div> 
              <div className='text-blue-500 font-semibold cursor-pointer' onClick={handleLogOut}>Log Out</div>     
            </div>
            
        </div>
    );
}

export default LeftHome;