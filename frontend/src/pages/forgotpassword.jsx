// import React from "react";
// import { FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo1.png";

// function ForgotPassword() {
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
//               Reset Your{" "}
//               <span className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] bg-clip-text text-transparent">
//                 LOOPIN
//               </span>{" "}
//               Password
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-400 text-sm text-center max-w-[280px]">
//             Enter your email address and we'll send you a link to reset your
//             password.
//           </p>

//           {/* Forgot Password Form */}
//           <form className="flex flex-col gap-4 w-full max-w-[300px]">
//             {/* Email with icon on right */}
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-600 rounded-xl px-4 py-3 pr-12 text-white bg-gray-800
//                 focus:outline-none focus:ring-2 focus:ring-[#00bbf9] shadow-sm
//                 focus:shadow-[0_0_12px_#00bbf9] placeholder-gray-400"
//               />
//               <FaEnvelope className="absolute right-4 top-3.5 text-gray-400" />
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] 
//               text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all
//               focus:shadow-[0_0_15px_#9b5de5] mt-2"
//             >
//               Send Reset Link
//             </button>
//           </form>

//           {/* Navigation Links */}
//           <div className="flex flex-col items-center gap-2">
//             <Link
//               to="/signin"
//               className="text-[#9b5de5] text-sm font-semibold cursor-pointer hover:underline"
//             >
//               Back to Sign In
//             </Link>
//             <p className="text-gray-400 text-sm">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-[#9b5de5] font-semibold cursor-pointer hover:underline"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;
