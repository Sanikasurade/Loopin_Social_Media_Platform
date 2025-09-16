import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";      
import dp1 from '../assets/dp1.jpg'
import { useSelector } from 'react-redux';


// Importing a default display picture (used if user has no profile image)

function Nav() {
     const { userData } = useSelector((state) => state.user);
    return (
        <div className='w-[90%] lg:w-[40%] h-[50px] bg-black 
        flex justify-around items-center fixed bottom-[20px]
         rounded-full shadow-2xl shadow-[#000000] z-[100]'>
            {/* Navigation content goes here */}
           <div> <FaHome className='text-white w-[25px] h-[25px]'/></div>
           <div><FaSearch className='text-white w-[25px] h-[25px]' /></div>
            <div><FaSquarePlus className='text-white w-[25px] h-[25px]' /></div>
             {/* Profile image */}
                                <div className='w-[30px] h-[30px] border-2 border-black
                                 rounded-full cursor-pointer overflow-hidden'> 
                                    <img src={ userData?.profileImage || dp1} alt="" className='w-full object-cover'/>
                                    {/* Show user's profile image, else fallback to default dp */}
                                </div>
        </div>
    );
}

export default Nav;