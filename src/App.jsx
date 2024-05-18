import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Home from "./pages/home";
import ForgotPassword from "./auth/forgotPassword";
import CreateAccount from "./auth/createAccount";
import EnterOTP from "./auth/enterOTP";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/enterotp" element={<EnterOTP />} />
      </Routes>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
};

export default App;
