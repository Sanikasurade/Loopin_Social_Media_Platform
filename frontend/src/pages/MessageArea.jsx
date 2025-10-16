import React from 'react';
import { useSelector } from 'react-redux';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import dp1 from '../assets/dp1.jpg';
import { FaRegImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import SenderMessage from '../components/SenderMessage';
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { serverUrl } from "../App.jsx";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';



function MessageArea() {
  const {userData}=useSelector(state=>state.user);
    const {selectedUser,messages}=useSelector(state=>state.message);
    const [input,setInput]=useState('')
    const navigate=useNavigate();
    const imageInput=useRef();
    const [frontendImage,setFrontendImage]=useState(null); 
    const [backendImage,setBackendImage]=useState(null); 
    const dispatch=useDispatch();

    // to handle image selection
    const handleImage=(e)=>{
    const file=e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
    

    }

    const handleSendMessage=async(e)=>{
      e.preventDefault()     // prevent form from reloading
      try{
        const result=await axios.post(`${serverUrl}/api/message/send/${selectedUser._id}`,{message:input},
          {withCredentials:true})
          dispatch(setMessages([...messages,result.data]))
          setInput("");
      }catch(error){
        console.error('Error sending message:', error);

      }
    }
    const getAllMessages=async()=>{
      try{
        const result=await axios.get(`${serverUrl}/api/message/getAll/${selectedUser._id}`,
        {withCredentials:true})
        dispatch(setMessages(result.data))
      }catch(error){
        console.error('Error fetching messages:', error);
      }
    }
   useEffect(()=>{
      getAllMessages();
   },[])
    return (

    
        <div className='w-fill h-[100vh] bg-black relative'>
          <div className=' flex items-center gap-[15px] px-[20px] 
          py-[10px] fixed top-0 z-[100] bg-black w-full'>
                <div className=" h-[80px] flex items-center gap-5 px-5">
                   <IoArrowBackOutline
                     className="text-white w-[25px] h-[25px] cursor-pointer "
                     onClick={() => navigate(`/`)}
                   />
                </div>
                <div className='w-[50px] h-[50px] border-2 border-black
                    rounded-full cursor-pointer overflow-hidden' onClick={()=>navigate(`/profile/${selectedUser.userName}`)}> 
                <img src={ selectedUser.profileImage || dp1} alt="" className='w-full object-cover'/>
                </div>
                <div>
                    <div className=' text-[14px] text-[white]'>{selectedUser.userName}</div>
                    <div className='text-gray-400'>{selectedUser.name}</div>
                </div>
          </div>


          <div className='w-full h-[80%] pt-[100px] pb-[120px] lg:pb-[150px] 
          px-[40px] flex flex-col  gap-[50px] overflow-auto bg-black'>
          {/* messages will be shown here */}
          {messages && messages.map((mess,index)=>(
            mess.sender==userData._id?<SenderMessage message={mess}/>:<ReceiverMessage message={mess}/>
          ))}
          </div>

          {/* input area */}

          <div className='w-full h-[80px] fixed bottom-0 flex 
          justify-center items-center bg-black z-[100]'>
          
          <form className='w-[90%] max-w-[800px] h-[80%] rounded-full bg-[#131616]
          flex items-center gap-[10px] px-[20px] relative ' onSubmit={handleSendMessage}>
          
            {frontendImage && <div className='w-[100px] rounded-2xl h-[100px] absolute top-[120px]
            right-[10px] overflow-hidden'><img src={frontendImage} alt=""  className='h-full  object-cover '/>
            </div>}
            <input type='file' accept='image/*' hidden ref={imageInput} onChange={handleImage}/>
            
            <input type="text" placeholder='Message' className='w-full h-full px-[20px]
            text-[18px] text-white outline-0' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div onClick={()=>imageInput.current.click()}><FaRegImage className='w-[25px] h-[25px] text-white' /></div>
            {(input || frontendImage) && <button className='w-[60px] h-[40px] rounded-full bg-gradient-to-br from-[#9500ff]
             to-[#39F3F3] flex items-center justify-center cursor-pointer'>
                <IoSend className='w-[20px] h-[20px] text-white cursor-pointer'/>
            </button> } 
            
            </form>  
          </div>
        </div>
    );
}

export default MessageArea;