import React from "react";
import "./index.css";
import plantsGrow from "../../assets/plantgrow.png";
const PlantsGrow = () => {
  return (
    <div className="plantsgrow_wrapper">
      <div className="inner">
        <img src={plantsGrow} alt="growImage" />
        <span className="heading">plants grow people</span>
      </div>
      <div className="inner">
        <img src={plantsGrow} alt="growImage" />
        <span className="heading">plants grow people</span>
      </div>
      <div className="inner">
        <img src={plantsGrow} alt="growImage" />
        <span className="heading">plants grow people</span>
      </div>
      <div className="inner">
        <img src={plantsGrow} alt="growImage" />
        <span className="heading">plants grow people</span>
      </div>
      <div className="inner">
        <img src={plantsGrow} alt="growImage" />
        <span className="heading">plants grow people</span>
      </div>
    </div>
  );
};

export default PlantsGrow;
