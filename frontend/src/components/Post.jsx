import React from 'react';
import dp1 from '../assets/dp1.jpg'
// Importing a default display picture (used if user has no profile image)
import VideoPlayer from './VideoPlayer.jsx';
// Importing VideoPlayer component (to play video media)
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
// Importing heart icons (filled and outlined) from react-icons library
import { useSelector } from 'react-redux';
// Hook to access values from Redux store
import { MdComment } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../App.jsx';
// Importing backend server URL from App.jsx (to hit API routes)


function Post({post}) {
    const userData=useSelector(state=>state.user.userData)
    const postData=useSelector(state=>state.post.post)
    const [showComment,setShowComment]=React.useState(true);
    const dispatch=useDispatch();


    const handleLike=async()=>{
        try{
            // API call to like/unlike the post
            const result=await axios.post(`${serverUrl}/api/post/like/${postData._id}`,{withCredentials:true})
            // Update the post data in Redux store (if needed)
            const updatedPost=result.data;
            // You can dispatch an action to update the post in the Redux store here

            const updatedPosts=postData.map(p=p._id==post._id?updatedPost:p)>

        }catch(error){
            console.log(error)
        }
    }

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
                    <img src={ post.author?.profileImage || dp1} alt="" className='w-full object-cover'/>
                    {/* Show user's profile image, else fallback to default dp */}
                </div>
                <div className='w-[200px] font-semibold truncate'>{post.author.userName}
                </div>
            </div>
        <button className='p-[10px] w-[80px] md:w-[100px] py-[5px] h-[30px] md:h-[40px]
        bg-[black] text-white rounded-2xl text-[14px] md:text-[16px]'>Follow</button>
        </div>
        {/* Media Section */}
        {/* Conditionally render image or video based on mediaType */}
        <div className="w-[90%]  h-[400px] border-gray-800 
        flex  items-center justify-center ">

        {post.mediaType=="image" && <div className="w-[100%]  h-[80%] 
       flex  items-center justify-center "> 
     
      <img src={post.media} alt="" className=" h-[100%] rounded-2xl"/>
      </div>}

      {post.mediaType=="video" && <div className="w-[90%] h-[250px]
       items-center justify-center 
      "> 
      <VideoPlayer media={post.media}/>
      </div>}
      </div>
      <div className='w-full h-[60px] flex justify-between items-center
       px-[20px] mt-[10px]'>
        {/* Interaction Section: Like, Commente buttons */}
        <div className='flex justify-center items-center gap-[20px] text-[20px] cursor-pointer'>
          <div className='flex justify-center items-center gap-[5px]'>
            {!postData.likes.includes(userData._id) && <GoHeart className='w-[25px] h-[25px] cursor pointer ' />}
            {postData.likes.includes(userData._id) && <GoHeartFill className='w-[25px] h-[25px] cursor pointer text-red-600' />}
            <span>{postData.likes.length}</span>
          </div>
          <div className='flex justify-center items-center gap-[5px]'>
            <MdComment className='w-[25px] h-[25px] cursor pointer '/>
            <span>{postData.comments.length}</span>
            </div>  
        </div>

        <div>
        {!userData.saved.includes(postData?._id) &&  <FaRegBookmark className='w-[25px] h-[25px] cursor pointer '/>} 
        {userData.saved.includes(postData?._id) &&  <FaBookmark className='w-[25px] h-[25px] cursor pointer  '/>}   
        </div>
      </div>

      {/* Caption Section */}
      {post.caption && <div className='w-full px-[20px] gap-[10px]
      flex justify-start items-center text-[15px]'>
        <h1>{post.author.userName}</h1>
        <div>{post.caption}</div>
      </div>}

        {/* Comments Section */}
        {showComment && 
            <div className='w-full flex flex-col gap-[30px] pb-[20px]'>
                <div className='w-full h-[80px] flex items-center justify-between
                 px-[20px] relative'>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] border-2 border-black
                    rounded-full cursor-pointer overflow-hidden'> 
                    <img src={ post.author?.profileImage || dp1} alt="" className='w-full object-cover'/>
                    {/* Show user's profile image, else fallback to default dp */}
                </div>
                    <input type="text" className='px-[10px] border-b-2 border-b-gray-500
                    w-[90%] outline-none h-[40px] placeholder="Write a comment..."' />
                    <button className='absolute right-[20px] cursor-pointer'><IoSendSharp className='w-[25px]
                    h-[25px]' /></button>
                </div>
            </div>
        }
      
    </div>
    );
}

export default Post;