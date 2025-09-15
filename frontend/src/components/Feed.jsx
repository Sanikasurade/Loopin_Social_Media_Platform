import React from 'react';
// Importing React library
import logo1 from '../assets/logo1.png'
// Importing a logo image from assets
import { FaRegHeart } from "react-icons/fa";
// Importing heart icon (outlined heart) from react-icons library
import Nav from './Nav.jsx';
// Importing Nav component (navigation bar)
function Feed() {
    return (
        <div className="lg:w-[50%] w-full
         bg-black min-h-[100vh] lg:h[100vh] relative 
         lg:overflow-y-auto">
            <div className="w-full flex items-center justify-between p-[20px] lg:hidden">
                            {/* Top section: logo + heart icon */}
                            
                            <img src={logo1} alt="" className='w-[150px]' />
                            {/* App logo */}
                            
                            <div>
                                {/* Empty div (can be used later if needed) */}
                            </div>  
            
                            <FaRegHeart className='text-white w-[25px] h-[25px]'/>
                            {/* Heart icon (white color, 25x25 size) */}
                        </div>
          <div className='w-full min-h-[100vh] flex flex-col 
          items-center gap-[20px] p-[10px] pt-[40px] bg-white
           relative pb-[120px]'>
            <Nav/>
           </div>
        </div>
    );
}

export default Feed;