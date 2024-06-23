import React from "react";
import logo from "../../../assets/logo.png";
import "./index.css";
const SellerAuthLayout = ({ children }) => {
  return (
    <div className="sellerauthlayoutWrapper">
      <div className="header">
        <img src={logo} alt="header_logo" />
        <span className="ms-3">HI ORGANICS</span>
      </div>
      <div className="sellermainauth">
        <div className="inner">
          <span className="getStartedHead">
            Get your Business <span className="startedHeadcolor"> Started</span>
          </span>
          {children}
        </div>
      </div>
      <div className="footer">
        <p className="text-center mb-0">Terms & condition || Privacy Policy</p>
      </div>
    </div>
  );
};

export default SellerAuthLayout;
