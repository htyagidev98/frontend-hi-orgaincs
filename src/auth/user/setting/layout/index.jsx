import React from "react";
import "./index.css";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";

const SettingLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="settingWrapper">
      <div className="settingheader">
        <div className="">
          <span>Support</span>
          <FaRegUser className="ms-4" size={20} />
          <IoBagHandleOutline className="ms-4" size={20} />
        </div>
      </div>
      <div className="settingmain">
        <div className="settingsidebar">
          <ul>
            <li
              className={
                pathname === "/user/setting/userdetails"
                  ? "sidebar_active_menu"
                  : ""
              }
            >
              <span>
                <MdDashboard size={20} className="mb-1" />
              </span>{" "}
              <NavLink
                className={
                  pathname === "/user/setting/userdetails"
                    ? "sidebar_active_menu nav-link"
                    : "nav-link"
                }
                to="/user/setting/userdetails"
              >
                Edit Details
              </NavLink>{" "}
            </li>
            <li
              className={
                pathname === "/user/setting/changepassword"
                  ? "sidebar_active_menu"
                  : ""
              }
            >
              <span>
                <MdPassword size={20} className="mb-1" />
              </span>{" "}
              <NavLink
                className={
                  pathname === "/user/setting/changepassword"
                    ? "sidebar_active_menu nav-link"
                    : "nav-link"
                }
                to={"/user/setting/changepassword"}
              >
                {" "}
                Change Password
              </NavLink>{" "}
            </li>

            <li
              className={
                pathname === "/user/setting/saveaddress"
                  ? "sidebar_active_menu"
                  : ""
              }
            >
              <span>
                <LiaAddressCard size={20} className="mb-1" />
              </span>{" "}
              <NavLink
                className={
                  pathname === "/user/setting/saveaddress"
                    ? "sidebar_active_menu nav-link"
                    : "nav-link"
                }
                to="/user/setting/saveaddress"
              >
                {" "}
                Save Address
              </NavLink>{" "}
            </li>
          </ul>
        </div>
        <div className="innerchildrendata">
          <div className="heading">{children[0].props.head} </div>
          <div>{children} </div>
        </div>
      </div>
      <div className="settingfooter">Terms & condition || Privacy Policy</div>
    </div>
  );
};

export default SettingLayout;
