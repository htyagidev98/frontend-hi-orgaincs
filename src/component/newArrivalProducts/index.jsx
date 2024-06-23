import React from "react";
import headLogo from "../../assets/arrivalHeadLogo.png";
import "./index.css";
import arrivalOne from "../../assets/arrival1.png";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { PiCurrencyInrLight } from "react-icons/pi";
import sadsnets from "../../assets/shadenet.png";
import synth from "../../assets/synth.png";
import premiumkit from "../../assets/premiumkit.png";
const NewArrivalProducts = () => {
  return (
    <div className="newArrivalProducts_wrapper">
      <div className="header_data">
        <img src={headLogo} alt="headlogo" />
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="card_wrapper">
        <div className="inner">
          <img src={arrivalOne} alt="arrivalImage" />
          <h6>Wooden Plant Tray - Set of 3</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              599
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                399
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            SALE
          </span>
        </div>

        <div className="inner">
          <img src={sadsnets} alt="arrivalImage" />
          <h6>Shade Net</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              599
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "100",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            SALE
          </span>
        </div>

        <div className="inner">
          <img src={synth} alt="arrivalImage" />
          <h6>Synth Ceramic Pot</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              799
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                599
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            SALE
          </span>
        </div>

        <div className="inner">
          <img src={premiumkit} alt="arrivalImage" />
          <h6>Premium Gardening Kit</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              1999
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                1499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            -26%
          </span>
        </div>

        <div className="inner">
          <img src={premiumkit} alt="arrivalImage" />
          <h6>Premium Gardening Kit</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              1999
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                1499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            -26%
          </span>
        </div>

        <div className="inner">
          <img src={premiumkit} alt="arrivalImage" />
          <h6>Premium Gardening Kit</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              1999
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                1499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            -26%
          </span>
        </div>
        <div className="inner">
          <img src={premiumkit} alt="arrivalImage" />
          <h6>Premium Gardening Kit</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              1999
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                1499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            -26%
          </span>
        </div>

        <div className="inner">
          <img src={premiumkit} alt="arrivalImage" />
          <h6>Premium Gardening Kit</h6>
          <div className="star_rating mt-4">
            <FaStar style={{ color: "#FFD02A" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
            <FaStar style={{ color: "#FFD02A", marginLeft: "3px" }} />
          </div>
          <div className="priceinfo mt-2 d-flex align-items-center">
            <del
              style={{
                color: "#969696",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <PiCurrencyInrLight />
              1999
            </del>
            <div
              className="ms-3"
              style={{
                color: "#149253",
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              <span>From</span>
              <span>
                {" "}
                <PiCurrencyInrLight />
                1499
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                color: "#ffffff",
                border: "1px solid #B3A73A",
                backgroundColor: "#B3A73A",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: "15px",
                letterSpacing: "1.5px",
              }}
            >
              View product{" "}
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FED02F",
              borderRadius: "2px",
              width: "52px",
              height: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "12px",
              letterSpacing: "0.6px",
            }}
          >
            -26%
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalProducts;
