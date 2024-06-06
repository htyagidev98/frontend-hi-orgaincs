import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../common/header";
import HeroSection from "../../component/heroSection";
import CounterDataSection from "../../component/counterDataSection";
import CategorySection from "../../component/categorySection";
import EdibleProductSection from "../../component/edibleProductSection";
import PlantAndDecorSection from "../../component/plantsAndDecorSection";
import NewArrivalProducts from "../../component/newArrivalProducts";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  const logoutHnadler = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div className="home_wrapper">
      <Header />
      <HeroSection />
      <CounterDataSection />
      <CategorySection />
      <EdibleProductSection />
      <PlantAndDecorSection />
      <NewArrivalProducts />
    </div>
  );
};

export default Home;
