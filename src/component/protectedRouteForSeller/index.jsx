import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteForSeller = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/seller/login" />;
  }
  return children;
};

export default ProtectedRouteForSeller;
