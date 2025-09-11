import React, { useState } from "react";
import logo from "../assets/logo1.png"; // Assuming you have a logo image in assets folder
import logo2 from "../assets/logo2.png"; // Assuming you have a logo image in assets folder
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../App.jsx";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


function SignIn() {

  const [inputClicked,setInputClicked]=useState({
    
    userName:false,
    password:false
  })
  const [showPassword,setShowPassword]=useState(false);
  const [loading,setloading]=useState(false);

  const[userName,setUserName]=useState("");
  
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSignIn=async()=>{
    setloading(true);
    try{
      const result=await axios.post(`${serverUrl}/api/auth/signin`,
        {userName,password},{withCredentials:true});
        console.log(result.data);
        setloading(false);
    }catch(error){
console.log(error);
setloading(false);
    }
  }
  return (
    //css  for background
    <div
      className="w-full h-screen bg-gradient-to-b from-black
 to-gray-900 flex flex-col justify-center items-center"
    >
      {/* Main container for the sign-up form */}
      <div
        className="w-[80%] lg:max-w-[50%] h-[500px] bg-white 
rounded-2xl flex justify-center items-center overflow-hidden
 border-2 border-[#1a1f23]"
      >
        {/* Left side of the sign-up form */}

        <div
          className="w-full lg:w-[50%] h-full bg-white flex 
        flex-col items-center p-[10px] gap-[20px] justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full mt-6">
            <span>Sign In to</span>
            <img
              src={logo}
              alt="error in logo"
              className="w-[100px] h-auto object-contain"
            />
          </div>

          <div
            className="relative flex items-center justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, userName: true })}
          >
            <label
              htmlFor="userName"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.userName ? "top-[-15px]" : ""
            }`}
            >
              Enter Username
            </label>
            <input
              type="text"
              id="userName"
              className="w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
              focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
               focus:shadow-[0_0_10px_#9b5de5]  "
              required onChange={(e)=>setUserName(e.target.value)} value={userName}
            />
          </div>
          
          <div
            className="relative flex items-center justify-start w-
          [90%] h-[50px] rounded-2xl  border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, password: true })}
          >
            <label
              htmlFor="password"
              className={`text-gray-700 absolute 
            left-[20px] p-[5px] bg-white text-[15px] ${
              inputClicked.password ? "top-[-15px]" : ""
            }`}
            >
              Enter password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className=" w-[100%]  h-[100%] 
                 rounded-xl px-10 py-3 text-black 
            focus:outline-none focus:ring-2 focus:ring-[#9b5de5] shadow-sm
              focus:shadow-[0_0_10px_#9b5de5]  " required onChange={(e)=>setPassword(e.target.value)} value={password}
            />
            {!showPassword ? (
              <FaEye
                className="absolute cursor-pointer right-[20px] w-[20px]
            h-[20px]"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <FaEyeSlash
                className="absolute cursor-pointer right-[20px] w-[20px]
            h-[20px]"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
          <div className="w-[90%] px-[15px] cursor-pointer" onClick={()=>navigate('/forgotpassword')}>Forgot Password</div>
          <button
  type="button"
  className="
    w-[75%] 
    sm:w-[70%]   /* Added → for small screens */
    md:w-[60%]   /* Added → for medium screens */
    lg:w-[80%]   /* Added → for large screens */
    xl:w-[50%]   /* Added → for extra-large screens */
    bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
    text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
    focus:shadow-[0_0_15px_#9b5de5]
  "
  onClick={handleSignIn}
  disabled={loading}
>
  {loading ? <ClipLoader size={30} color="white" /> : "SignIn"}
</button>

          <p className="cursor-pointer text-gray-800" onClick={()=>navigate('/signup')}>
           Want To Create A New Account?<span className="border-b-2 border-b-black pb-[3px]text-black ">Sign Up</span>
          </p>
        </div>
        {/* Right side of the sign-up form */}
        {/* Right side of the sign-up form */}
                <div
                  className="md:w-[50%] h-full hidden lg:flex
                justify-center items-center bg-[#000000] flex-col gap-[10px]
                text-white text-[16px] font-semibold rounded-l-[30px]
                shadow-2xl shadow-black"
                > <img src={logo2} alt="" className='w-[60%]' />
                <p>Where People Stays In A Loop</p></div>
      </div>
    </div>
  );
}
export default SignIn;























// import React, { useState } from "react";
// import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo1.png";

// function SignIn() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white">
//       {/* Main container */}
//       <div
//         className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%] 
//         bg-black rounded-2xl flex justify-center items-center overflow-hidden
//         border border-gray-300 shadow-2xl z-10 py-8"
//       >
//         {/* Content container */}
//         <div className="w-full flex flex-col items-center px-8 gap-6">
//           {/* Logo + Title */}
//           <div className="flex flex-col items-center">
//             <img
//               src={logo}
//               alt="Loopin Logo"
//               className="w-[120px] h-auto object-contain drop-shadow-lg"
//             />
//             <span className="mt-3 text-lg font-bold text-white">
//               Sign In to{" "}
//               <span className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] bg-clip-text text-transparent">
//                 LOOPIN
//               </span>
//             </span>
//           </div>

//           {/* Sign-In Form */}
//           <form className="flex flex-col gap-4 w-full max-w-[300px]">
//             {/* Email with icon on right */}
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border border-gray-600 rounded-xl px-4 py-3 pr-12 text-white bg-gray-800
//                 focus:outline-none focus:ring-2 focus:ring-[#00bbf9] shadow-sm
//                 focus:shadow-[0_0_12px_#00bbf9] placeholder-gray-400"
//               />
//               <FaEnvelope className="absolute right-4 top-3.5 text-gray-400" />
//             </div>

//             {/* Password with Eye toggle */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full border border-gray-600 rounded-xl px-4 py-3 pr-12 text-white bg-gray-800
//                 focus:outline-none focus:ring-2 focus:ring-[#00f5d4] shadow-sm
//                 focus:shadow-[0_0_12px_#00f5d4] placeholder-gray-400"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-3 text-gray-400 hover:text-gray-200"
//               >
//                 {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//               </button>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="text-right">
//               <span className="text-[#9b5de5] text-sm font-semibold cursor-pointer hover:underline">
//                 <Link to="/forgotpassword">Forgot Password?</Link>
//               </span>
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
//               text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
//               focus:shadow-[0_0_15px_#9b5de5] mt-2"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Redirect */}
//           <p className="text-gray-400 text-sm">
//             Don't have an account?{" "}
//             <span className="text-[#9b5de5] font-semibold cursor-pointer hover:underline">
//                 <Link
//                     to="/signup"
//                     className="text-[#9b5de5] font-semibold cursor-pointer hover:underline"
//                 >
//                     Sign Up
//                 </Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
