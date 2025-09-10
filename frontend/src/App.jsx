import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
export const serverUrl = "http://localhost:8000";
//import SignIn from "./pages/SignIn.jsx";
//import ForgotPassword from "./pages/forgotpassword.jsx";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} /> */}
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
    </Routes>
  );
}
export default App;

