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
