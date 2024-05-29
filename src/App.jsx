import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Home from "./pages/home";
import ForgotPassword from "./auth/forgotPassword";
import CreateAccount from "./auth/createAccount";
import { ToastContainer } from "react-toastify";
import CreateNewPassword from "./auth/createNewPassword";
import LoginWithOTP from "./auth/loginWithOTP";
import VerifyOtpForCreateAccount from "./auth/verifyOtpForCreateAccount";
import VerifyOtpForForgotPassword from "./auth/verifyOtpForForgotPassword";
import VerifyOtpForLogin from "./auth/verifyOtpForLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginwithotp" element={<LoginWithOTP />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/verifyotpforforgotpassword"
          element={<VerifyOtpForForgotPassword />}
        />
        <Route path="/verifyotpforlogin" element={<VerifyOtpForLogin />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/verifyotpforcreateaccount"
          element={<VerifyOtpForCreateAccount />}
        />
      </Routes>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
};

export default App;
