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
import MultipleRadial from "../charts/radialChart";
import DataTableComponent from "../../../component/dataTableComponent";
import celImage from "../../../assets/category2.png";
const Dashboard = () => {
  // state for chart
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
  // chart state for radial
  const [radialChartState, setRadialChartState] = useState({
    options: {
      chart: {
        type: "radialBar",
        offsetY: 0,
      },
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: false,
          hollow: {
            margin: 5,
            size: "48%",
            background: "transparent",
          },
          track: {
            show: true,
            background: "#e0e0e0", // Outer track color
            strokeWidth: "97%",
            opacity: 1,
          },
          dataLabels: {
            name: {
              show: false, // Hide the name label
            },
            value: {
              show: true, // Show the value label
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
      colors: ["rgba(255, 115, 29, 1)", "#00E396"], // Colors for the radial bars
    },
    series: [
      [100], // Outer series data
      [53], // Inner series data
    ],
  });

  // state for timehandleractive
  const [timeHandler, setTimeHandler] = useState("1Y");

  const columns = [
    {
      name: "Product",
      width: "200px",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={celImage}
            alt={"productimage"}
            style={{
              width: "30px",
              borderRadius: "50%",
              height: "30px",
              marginRight: "10px",
            }}
          />
          {row.producttitle}
        </div>
      ),
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Sales",
      selector: (row) => row.sales,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
    {
      name: "Ratings",
      selector: (row) => row.rating,
    },
  ];

  const data = [
    {
      id: 1,
      producttitle: "Bentwood chair",
      amount: "₹ 10,769",
      sales: "899",
      stock: "89K",
      rating: "5.0",
    },
    {
      id: 2,
      producttitle: "Nike shoes",
      amount: "₹ 6,999",
      sales: "1209",
      stock: "71K",
      rating: "5.0",
    },
    {
      id: 3,
      producttitle: "One seater sofa",
      amount: "₹ 21,769",
      sales: "1101",
      stock: "89",
      rating: "4.9",
    },
  ];

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
        <div className="d-flex justify-content-between mt-2">
          <span className="ms-3 fw-bold">Revenue</span>
          <div className="info_handler border">
            <span
              className={
                timeHandler === "1M"
                  ? "span_data span_data_active"
                  : "span_data"
              }
              onClick={() => setTimeHandler("1M")}
            >
              1M
            </span>{" "}
            <span
              className={
                timeHandler === "3M"
                  ? "span_data span_data_active"
                  : "span_data"
              }
              onClick={() => setTimeHandler("3M")}
            >
              3M
            </span>{" "}
            <span
              className={
                timeHandler === "6M"
                  ? "span_data span_data_active"
                  : "span_data"
              }
              onClick={() => setTimeHandler("6M")}
            >
              6M
            </span>{" "}
            <span
              className={
                timeHandler === "1Y"
                  ? "span_data span_data_active"
                  : "span_data"
              }
              onClick={() => setTimeHandler("1Y")}
            >
              1Y
            </span>{" "}
          </div>
        </div>
        <div className="chartindicatordata">
          <div className="light_indicator d-flex justify-content-center align-items-center">
            <div className="inner d-flex justify-content-center align-items-center">
              <span
                className="yellow_span"
                style={{
                  display: "inline-block",
                  height: "24px",
                  width: "24px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(253, 247, 115, 1)",
                }}
              ></span>{" "}
              <span className="fw-bold ms-2">Orders</span>
            </div>
            <div className="inner d-flex justify-content-center align-items-center ms-4">
              <span
                className="yellow_span"
                style={{
                  display: "inline-block",
                  height: "24px",
                  width: "24px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(63, 129, 224, 1)",
                }}
              ></span>{" "}
              <span className="fw-bold ms-2">Refund</span>
            </div>
            <div className="inner d-flex justify-content-center align-items-center ms-4">
              <span
                className="yellow_span"
                style={{
                  display: "inline-block",
                  height: "24px",
                  width: "24px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(75, 181, 67, 1)",
                }}
              ></span>{" "}
              <span className="fw-bold ms-2">Earnings</span>
            </div>
          </div>
        </div>
        <BarChart chartState={barChartState} />
        <div className="bottomchart_data">
          <div className="inner">
            <h6 className="text-center">56,012</h6>
            <span className="d-block text-center">Orders</span>
          </div>
          <div className="inner">
            <h6 className="text-center">₹ 2,47,901</h6>
            <span
              className="d-block text-center"
              style={{
                color: "rgba(85, 85, 85, 1)",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Earnings
            </span>
          </div>
          <div className="inner">
            <h6 className="text-center">892</h6>
            <span
              className="d-block text-center"
              style={{
                color: "rgba(85, 85, 85, 1)",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Refunds
            </span>
          </div>
          <div className="inner">
            <h6
              className="text-center"
              style={{ color: "rgba(75, 181, 67, 1)" }}
            >
              18.92%
            </h6>
            <span
              className="d-block text-center"
              style={{
                color: "rgba(85, 85, 85, 1)",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Conversation Ratio
            </span>
          </div>
        </div>
      </div>

      <div className="radialbarWrapper">
        <div className="leftdata">
          <h6>Category wise sales</h6>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <div className="w-50">
                <MultipleRadial chartState={radialChartState} />
              </div>
              <div className="w-50">
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 115, 29, 1)",
                    }}
                  ></span>
                  <span className="fw-bold ms-2">
                    Fertilizers <span className="ms-3"> 45%</span>
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <span
                    style={{
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(63, 129, 224, 1)",
                    }}
                  ></span>
                  <span className="fw-bold ms-2">
                    Home Decor<span className="ms-3"> 45%</span>
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <span
                    style={{
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(75, 181, 67, 1)",
                    }}
                  ></span>
                  <span className="fw-bold ms-2">
                    Grocerry<span className="ms-3"> 35%</span>
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <span
                    style={{
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(251, 255, 55, 1)",
                    }}
                  ></span>
                  <span className="fw-bold ms-2">
                    Pots and Plants<span className="ms-3"> 20%</span>
                  </span>
                </div>
                <h6
                  className="mt-4"
                  style={{
                    color: "rgba(119, 119, 119, 1)",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Overall sales from ecommerce
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="rightdata">
          <h6>Best sellers</h6>
          <div className="table_data">
            <DataTableComponent data={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
