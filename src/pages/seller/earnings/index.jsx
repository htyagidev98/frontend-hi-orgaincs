import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Earnings = () => {
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
    </div>
  );
};

export default Earnings;
