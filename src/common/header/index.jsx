import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import rightLogo from "../../assets/Rectangle.png";
import { TiShoppingCart } from "react-icons/ti";

import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header_wrapper">
      <div className="top_header">20% OFF on Selected Products</div>
      <div className="middle_header">
        <div className="left_data">
          <div className="logowrapper">
            <img src={logo} alt="header_logo" />
          </div>
          <h5>HI ORGANICS</h5>
          <div className="input_wrapper">
            <input type="text" placeholder="Search for Products" />
            <span className="search_icon">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="right_data">
          <div className="image_wrapper">
            <img src={rightLogo} alt="rightimage" />
          </div>

          <div className="link_wrapper ms-3">
            <NavLink className="nav-link fw-bold">Account</NavLink>
          </div>

          <div className="cart_wrapper d-flex align-items-center ms-4">
            <span>
              <TiShoppingCart size={25} />
            </span>
            <NavLink className="nav-link fw-bold ms-3">Cart</NavLink>
          </div>
        </div>
      </div>
      <div className="end_header">
        <div className="left_data">
          <div className="all_category_dropdown">
            <span className="me-3">All Category</span>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="menu_wrapper d-flex align-items-center">
            <div className="menu_iem fw-bold cursor">
              <span>Home</span>
              <span>
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="menu_iem fw-bold cursor ms-4">
              <span>Shop</span>
              <span>
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="menu_iem fw-bold cursor ms-4">
              <span>Pages</span>
              <span>
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="menu_iem fw-bold cursor ms-4">
              <span>Blog</span>
              <span>
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="menu_iem fw-bold cursor ms-5">
              <span>About Us</span>
            </div>
          </div>
        </div>
        <div className="right_data">
          <div className="menu_iem fw-bold d-flex align-items-center cursor ms-4">
            <NavLink className={"nav-link"}>Contact Us</NavLink>
            <div className="ms-5">
              <FaPhoneVolume />
              <span className="ms-3">(219) 666-4111</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
