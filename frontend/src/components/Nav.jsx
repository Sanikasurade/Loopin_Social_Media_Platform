import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';      
import dp1 from '../assets/dp1.jpg'
// Importing a default display picture (used if user has no profile image)

function Nav() {
    return (
        <div className='w-[90%] lg:w-[40%] h-[50px] bg-black 
        flex justify-around items-center fixed bottom-[20px]
         rounded-full shadow-2xl shadow-[#000000] z-[100]'>
            {/* Navigation content goes here */}
           <div> <FaHome /></div>
           <div><FaSearch /></div>
            <div><FaSquarePlus /></div>
             {/* Profile image */}
                                <div className='w-[50px] h-[50px] border-2 border-black
                                 rounded-full cursor-pointer overflow-hidden'> 
                                    <img src={ userData.profileImage || dp1} alt="" className='w-full object-cover'/>
                                    {/* Show user's profile image, else fallback to default dp */}
                                </div>
        </div>
    );
}

export default Nav;