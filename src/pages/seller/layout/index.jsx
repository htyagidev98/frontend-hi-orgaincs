import React from "react";
import logo from "../../../assets/logo.png";

import "./index.css";
import { Link, useLocation } from "react-router-dom";
import sellersidebardata from "../../../customdata/sellerdashboard";
import { IoScanOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const headRetutn = () => {
    if (pathname === "/seller/dashboard") {
      return "Dashboard";
    } else if (pathname === "/seller/categories") {
      return "Categories";
    } else if (pathname === "/seller/products") {
      return "Products";
    } else if (pathname === "/seller/sales") {
      return "Sales";
    } else if (pathname === "/seller/gateway") {
      return "Gateway";
    } else if (pathname === "/seller/profile") {
      return "Profile";
    } else if (pathname === "/seller/addproduct") {
      return "Add Product";
    }
  };
  return (
    <div className="sellerLayoutWrapper">
      <div className="sidebar">
        <div className="logosection">
          <img src={logo} alt="logo" />
          <span>HI ORGANICS</span>
        </div>
        <ul>
          {sellersidebardata.map((curElm, index) => (
            <li
              key={index}
              className={pathname === curElm.link ? "linkactive" : ""}
            >
              <Link
                to={curElm.link}
                className={pathname === curElm.link ? "text_danger" : ""}
              >
                <span
                  className={
                    pathname === curElm.link ? "text_danger me-3" : "me-3"
                  }
                >
                  {curElm.icon}{" "}
                </span>{" "}
                <span>{curElm.label} </span>{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="maincontainer">
        <div className="header">
          <div className="d-flex justify-content-between align-items-center p-3">
            <input type="text" placeholder="Search" />
            <div className="cursor">
              <IoScanOutline size={25} className="me-4" />
              <FaRegMoon size={25} className="me-4" />
              <FaRegBell size={25} className="me-4" />
            </div>
          </div>
          <div className="heading">{headRetutn()} </div>
        </div>
        <div className="maininner mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
