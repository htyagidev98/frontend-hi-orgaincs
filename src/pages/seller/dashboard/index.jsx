import React from "react";
import profile from "../../../assets/profile35.png";
import "./index.css";
import { CgCalendarDates } from "react-icons/cg";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboardWrapper">
      <div className="d-flex justify-content-between align-items-center ps-4 pe-4">
        <div className="leftsection">
          <img src={profile} alt="profileImage" />
          <div className="ms-3">
            <h6>Hello, Anna</h6>
            <span>Here’s what’s happening with your business today</span>
          </div>
        </div>
        <div className="rightsection">
          <div className="callendersection">
            <span>Monday, 24 April, 2023</span>
            <span className="calender_span">
              <CgCalendarDates size={25} />
            </span>
          </div>
          <Link to="/seller/addproduct">
            <TiPlus className="me-2 mb-1" />
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
