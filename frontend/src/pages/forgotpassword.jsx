// import { set } from "mongoose";
import React,{ useState } from "react";
import { ClipLoader } from "react-spinners";

function ForgotPassword() {
   const [step, setStep] = useState(1); // define step
   const[inputClicked,setInputClicked]=useState({
      email:false,
      otp:false,
      newPassword:false,
      confirmNewPassword:false
   })
   const [email,setEmail]=useState("");
   const [otp,setOtp]=useState("");
   const [loading,setLoading]=useState(false);
   const[newPassword,setNewPassword]=useState("");
   const[confirmNewPassword,setConfirmPassword]=useState("");
   
   const handleStep1=async()=>{ 
    setLoading(true)
    try{
const result=await axios.post(`${serverUrl}/api/auth/sendOtp`,{email},{withCredentials:true})
console.log(result.data)
setStep(2) 
setLoading(false)   
}catch(error){
  console.log(error)
setLoading(false)

    }
  }
  const handleStep2=async()=>{
    setLoading(true) 
    try{
const result=await axios.post(`${serverUrl}/api/auth/verifyOtp`,{email,otp},{withCredentials:true})
console.log(result.data) 
setStep(3)   
setLoading(false)
}catch(error){
  console.log(error)
setLoading(false)

    }
  }
  const handleStep3=async()=>{ 
    setLoading(true)
    try{
      if(newPassword!==confirmNewPassword){
        alert("passwords do not match")
        return;
      }
const result=await axios.post(`${serverUrl}/api/auth/resetPassword`,{email,newPassword},{withCredentials:true})
console.log(result.data)    
}catch(error){
  console.log(error)

    }
  }
    return(
        <div className="w-full h-screen  bg-gradient-to-b from-black
 to-gray-900 flex flex-col justify-center items-center">

      {/* Step1 */}

      {step==1 && <div className='w-[90%] max-w-[500px] h-[400px] bg-white
     rounded-2xl flex justify-center items-center flex-col border-[#1a1f23]'>
         <h2 className='text-[30px] font-semibold'>Enter Email To get OTP</h2>
         <div
            className="relative flex items-center mt-[30px] justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked,email:true })}
          >
            <label
              htmlFor="email"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.email ? "top-[-15px]" : ""
            }`}
            >
              Enter email
            </label>
            <input
              type="email"
              id="email"
              className=" w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
               focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
              focus:shadow-[0_0_10px_#9b5de5]  "
              required onChange={(e)=>setEmail(e.target.value)} value={email}
            />
          </div>

         
          
          <button
            type="button"
            className="
    w-[55%] 
    sm:w-[70%]   /* Added → for small screens */
    md:w-[60%]   /* Added → for medium screens */
    lg:w-[50%]   /* Added → for large screens */
    xl:w-[50%]   /* Added → for extra-large screens */
   mt-[30px] bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
    text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
    focus:shadow-[0_0_15px_#9b5de5]
  " disabled={loading} onClick={handleStep1}>{loading?<ClipLoader size={30} color="white"/>:"Send Email"}
          </button>
         </div>}
    {step==2 && <div className='w-[90%] max-w-[500px] h-[400px] bg-white
     rounded-2xl flex justify-center items-center flex-col border-[#1a1f23]'>

       <h2 className='text-[30px] font-semibold'>forgot Password</h2>
       <div
            className="relative flex items-center mt-[30px] justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked,otp:true })}
          >
            <label
              htmlFor="otp"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.otp ? "top-[-15px]" : ""
            }`}
            >
              Enter OTP
            </label>
            <input
              type="email"
              id="otp"
              className=" w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
               focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
              focus:shadow-[0_0_10px_#9b5de5]  "
              required onChange={(e)=>setOtp(e.target.value)} value={otp}
            />
          </div>

         
          
          <button
            type="button"
            className="
    w-[55%] 
    sm:w-[70%]   /* Added → for small screens */
    md:w-[60%]   /* Added → for medium screens */
    lg:w-[50%]   /* Added → for large screens */
    xl:w-[50%]   /* Added → for extra-large screens */
   mt-[30px] bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
    text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
    focus:shadow-[0_0_15px_#9b5de5]
  " disabled={loading} onClick={handleStep2}>{loading?<ClipLoader size={30} color="white"/>:"Submit"}
          </button>

    </div>}

    {/* Step2 */}
    {step==3 && <div className='w-[90%] max-w-[500px] h-[400px] bg-white
     rounded-2xl flex justify-center items-center flex-col border-[#1a1f23]'>
      <h2 className='text-[30px] font-semibold'>Reset Password</h2>

       {/* Div for Confirm Password */}
         <div
            className="relative flex items-center mt-[30px] justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked,newPassword:true})}
          >
            <label
              htmlFor="newPassword"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.newPassword ? "top-[-15px]" : ""
            }`}
            >
              Enter New Password
            </label>
            <input
              type="text"
              id="newPassword"
              className=" w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
               focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
              focus:shadow-[0_0_10px_#9b5de5]  "
              required onChange={(e)=>setNewPassword(e.target.value)} value={newPassword}
            />
          </div>
           {/* Div for Confirm Password */}
          <div
            className="relative flex items-center mt-[30px] justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked,confirmNewPassword:true})}
          >
            <label
              htmlFor="confirmNewPassword"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.confirmNewPassword ? "top-[-15px]" : ""
            }`}
            >
              Enter Confirm Password
            </label>
            <input
              type="text"
              id="confirmNewPassword"
              className=" w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
               focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
              focus:shadow-[0_0_10px_#9b5de5]  "
              required onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmNewPassword}
            />
          </div>
          <button
            type="button"
            className="
    w-[55%] 
    sm:w-[70%]   /* Added → for small screens */
    md:w-[60%]   /* Added → for medium screens */
    lg:w-[50%]   /* Added → for large screens */
    xl:w-[50%]   /* Added → for extra-large screens */
   mt-[30px] bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
    text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
    focus:shadow-[0_0_15px_#9b5de5]
  " disabled={loading} onClick={handleStep3}>{loading?<ClipLoader size={30} color="white"/>:"Submit"}
          </button>

      </div>}
 </div>
    )
}
export default ForgotPassword;