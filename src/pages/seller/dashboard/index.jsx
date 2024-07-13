import React, { useState } from "react";
import profile from "../../../assets/profile35.png";
import "./index.css";
import { CgCalendarDates } from "react-icons/cg";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsBorderStyle } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { VscGraphLine } from "react-icons/vsc";
import { PiUsersThreeFill } from "react-icons/pi";
import BarChart from "../charts/barChart";

const Dashboard = () => {
  const [barChartState, setBarChartState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: 0,
                to: 100,
                color: "rgba(75, 181, 67, 1)",
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 12, 19, 78, 45],
      },
    ],
  });

  return (
    <div className="dashboardWrapper">
      <div className="d-flex justify-content-between align-items-center">
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
      <div className="dashinfo">
        <div className="inner_card">
          <div className="topdata d-flex justify-content-between align-items-center">
            <span className="total_heading">Total Orders</span>
            <span className="chart_icon_span">
              <BsBorderStyle size={25} />
            </span>
          </div>

          <div className="bottomdata mt-5 d-flex justify-content-between align-items-center">
            <span className="value_heading">36,778</span>
            <span className="text-success mt-4 fw-bold">
              +5.21% <GoArrowUpRight size={25} />
            </span>
          </div>
        </div>

        <div className="inner_card ms-4">
          <div className="topdata d-flex justify-content-between align-items-center">
            <span className="total_heading">Total Earnings</span>
            <span className="chart_icon_span">
              <VscGraphLine size={25} />
            </span>
          </div>

          <div className="bottomdata mt-5 d-flex justify-content-between align-items-center">
            <span className="value_heading">96,778</span>
            <span className="text-danger mt-4 fw-bold">
              -3.89% <GoArrowDownRight size={25} />
            </span>
          </div>
        </div>

        <div className="inner_card ms-4">
          <div className="topdata d-flex justify-content-between align-items-center">
            <span className="total_heading">New Customers</span>
            <span className="chart_icon_span">
              <PiUsersThreeFill size={25} />
            </span>
          </div>

          <div className="bottomdata mt-5 d-flex justify-content-between align-items-center">
            <span className="value_heading">36,778</span>
            <span className="text-success mt-4 fw-bold">
              +11.1% <GoArrowUpRight size={25} />
            </span>
          </div>
        </div>
      </div>

      <div className="chart_wrapper">
        <BarChart chartState={barChartState} />
      </div>
    </div>
  );
};

export default Dashboard;
