import React from 'react';
import dp1 from '../assets/dp1.jpg'
// Importing a default display picture (used if user has no profile image)
import VideoPlayer from './VideoPlayer.jsx';
// Importing VideoPlayer component (to play video media)
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";


function Post({postData}) {
    return (
        /*Container for individual post*/
    <div className='w-[90%] min-h-[450px] flex flex-col gap-[10px] 
    bg-white items-center shadow-2xl shadow[#00000058] rounded-2xl pb-[20px]'>
        <div className='w-full h-[80px] flex  justify-between items-center px-[10px]'>
            <div className='flex  justify-center items-center  md:gap-[20px] gap-[10px]'>
                {/* Post header: user info */}
                {/* Profile image */}
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] border-2 border-black
                    rounded-full cursor-pointer overflow-hidden'> 
                    <img src={ postData.author?.profileImage || dp1} alt="" className='w-full object-cover'/>
                    {/* Show user's profile image, else fallback to default dp */}
                </div>
                <div className='w-[200px] font-semibold truncate'>{postData.author.userName}
                </div>
            </div>
        <button className='p-[10px] w-[80px] md:w-[100px] py-[5px] h-[30px] md:h-[40px]
        bg-[black] text-white rounded-2xl text-[14px] md:text-[16px]'>Follow</button>
        </div>
        {/* Media Section */}
        {/* Conditionally render image or video based on mediaType */}
        <div className="w-[90%]  h-[400px] border-gray-800 
        flex  items-center justify-center ">

        {postData.mediaType=="image" && <div className="w-[100%]  h-[80%] 
       flex  items-center justify-center "> 
     
      <img src={postData.media} alt="" className=" h-[100%] rounded-2xl"/>
      </div>}

      {postData.mediaType=="video" && <div className="w-[90%] h-[250px]
       items-center justify-center 
      "> 
      <VideoPlayer media={postData.media}/>
      </div>}
      </div>
      <div className='w-full h-[60px] flex justify-between items-center
       px-[20px] mt-[10px]'>
        {/* Interaction Section: Like, Commente buttons */}
        <div>
          <div>

          </div>
          <div>Comment</div>  
        </div>

        <div>

        </div>
      </div>
    </div>
    );
}

export default Post;