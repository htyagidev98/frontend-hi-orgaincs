import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const logoutHnadler = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>&#128516; WELCOME TO DASHBOARD &#128515;</h1>
        <button className="btn btn-danger mt-2" onClick={() => logoutHnadler()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
