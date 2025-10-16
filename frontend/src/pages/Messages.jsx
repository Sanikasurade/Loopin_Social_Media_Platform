import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function Messages() {
  const navigate=useNavigate();
    return (
        <div className=' w-full min-h-[100vh] flex flex-col 
        bg-black gap-[20px] p-[10px]'>

            <div className="w-full h-[80px] flex items-center gap-5 px-5">
                   <IoArrowBackOutline
                     className="text-white w-[25px] h-[25px] cursor-pointer lg:hidden "
                     onClick={() => navigate(`/`)}
                   />
                   <h1 className="text-white font-semibold text-[20px]">Messages</h1>
                 </div>
        </div>
    );
}

export default Messages;