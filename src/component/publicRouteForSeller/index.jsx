import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouteForSeller = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/seller/dashboard" />;
  }
  return children;
};

export default PublicRouteForSeller;
