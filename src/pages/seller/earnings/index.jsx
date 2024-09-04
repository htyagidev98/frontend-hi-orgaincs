import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import BarChart from "../charts/barChart";
import "./index.css";

const Earnings = () => {
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
  const [timeHandler, setTimeHandler] = useState("1Y");

  return (
    <div className="earningsWrapper" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-md-5">
          <div className="inner shadow p-4 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <span
                style={{
                  color: "rgba(126, 126, 126, 1)",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Payment to Date
              </span>
              <button
                style={{
                  border: "2px solid rgba(76, 175, 80, 1)",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "151px",
                  color: "rgba(1, 64, 0, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Withdraw Funds
              </button>
            </div>

            <div className="d-flex justify-content-between mt-5">
              <span
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "32px",
                  fontWeight: "700",
                }}
              >
                ₹6778
              </span>
              <span
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "30px",
                }}
              >
                +5.21%
                <GoArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="inner shadow p-4 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <span
                style={{
                  color: "rgba(126, 126, 126, 1)",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Payment Outstanding{" "}
              </span>
            </div>

            <div
              className="d-flex justify-content-between mt-5"
              style={{ paddingTop: "19px" }}
            >
              <span
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "32px",
                  fontWeight: "700",
                }}
              >
                ₹6778
              </span>
              <span
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "30px",
                }}
              >
                +5.21%
                <GoArrowUpRight size={20} />
              </span>
            </div>
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
    </div>
  );
};

export default Earnings;
