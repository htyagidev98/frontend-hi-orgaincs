import React from "react";
import "./index.css";
const CounterDataSection = () => {
  return (
    <div className="counterDataSection">
      <div className="d-flex align-items-center">
        <div className="text-white">
          <h2>1975+</h2>
          <span>Total Products</span>
        </div>
        <div className="text-white ms-5">
          <h2>2880+</h2>
          <span>Satisfied Clients</span>
        </div>
        <div className="text-white ms-5">
          <h2>3219+</h2>
          <span>Project Completed</span>
        </div>
        <div className="text-white ms-5">
          <h2>100%</h2>
          <span>Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default CounterDataSection;
