import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
export const serverUrl = "http://localhost:5000";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";
import getCurrentUser from "./hooks/getCurrentUser.jsx";
import { useSelector } from "react-redux";
import getSuggestedUsers from "./hooks/getSuggestedUsers.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Upload from "./pages/Upload.jsx";
import getAllPost from "./hooks/getAllPost.jsx";
import Messages from "./pages/Messages.jsx";
import MessageArea from "./pages/MessageArea.jsx";



function App() {
  getCurrentUser();
  getSuggestedUsers();
  getAllPost();
  // getAllLoops();
  const {userData}=useSelector(state=>state.user)
 
  return (
    <Routes>
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to={"/"} />}
      />
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to={"/"} />}
      />
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to={"/signin"} />}
      />
      <Route
        path="/forgotpassword"
        element={!userData ? <ForgotPassword /> : <Navigate to={"/"} />}
      />
      <Route
        path="/profile/:userName"
        element={userData ? <Profile /> : <Navigate to={"/signin"} />}
      />
      <Route
        path="/editprofile"
        element={userData ? <EditProfile /> : <Navigate to={"/signin"} />}
      />
      <Route
        path="/upload"
        element={userData ? <Upload /> : <Navigate to={"/signin"} />}
      />
      {/* <Route
        path="/loops"
        element={userData ? <Loops /> : <Navigate to={"/signin"} />}
      /> */}
      <Route
        path="/messages"
        element={userData ? <Messages/> : <Navigate to={"/signin"} />}
      />
       <Route
        path="/messageArea"
        element={userData ? <MessageArea/> : <Navigate to={"/signin"} />}
      />
      


    </Routes>
    
  );
}
export default App;

