import React from "react";
import "./index.css";
import bottolOne from "../../assets/bottol1.png";
import bottolTwo from "../../assets/bottol2.jpg";
import bottolThree from "../../assets/bottol3.png";
import bottolFour from "../../assets/bottol4.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

const EdibleProductSection = () => {
  return (
    <div className="edibleproduct_wrapper">
      <div className="heading_wrapper">
        <h2>Our </h2>
        <h2>EDIBLE OIL PRODUCTS </h2>
        <h2 className="product_head_color">PRODUCTS </h2>
      </div>
      <div className="card_wrapper">
        <div className="inner">
          <div className="d-flex">
            <span>SALE</span>
            <img src={bottolOne} className="ms-4" alt="editableImage" />
          </div>
          <div className="text-center">
            <h6
              style={{
                fontStyle: "italic",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Arvum
            </h6>
            <h5
              style={{
                fontWeight: "600",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Gran Reserva Vinegar,{" "}
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  display: "inline-block",
                  marginBottom: "0px",
                }}
              >
                {" "}
                200ml
              </p>
            </h5>
            <h6
              style={{
                color: "#B3A73A",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              315 rs
            </h6>

            <button
              style={{
                border: "1px solid #B3A73A",
                fontSize: "18px",
                fontWeight: "500",
                color: "#B3A73A",
                backgroundColor: "#fff",
                height: "50px",
                width: "222px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              <IoBag className="me-3 mb-1" />
              Add to cart
            </button>
          </div>
        </div>

        <div className="inner">
          <div className="d-flex">
            <span>SALE</span>
            <img src={bottolTwo} className="ms-4" alt="editableImage" />
          </div>
          <div className="text-center">
            <h6
              style={{
                fontStyle: "italic",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              José Andrés
            </h6>
            <h5
              style={{
                fontWeight: "600",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Extra Virgin Olive,{" "}
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  display: "inline-block",
                  marginBottom: "0px",
                }}
              >
                {" "}
                500ml
              </p>
            </h5>
            <h6
              style={{
                color: "#B3A73A",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              512 rs
            </h6>

            <button
              style={{
                border: "1px solid #B3A73A",
                fontSize: "18px",
                fontWeight: "500",
                color: "#B3A73A",
                backgroundColor: "#fff",
                height: "50px",
                width: "222px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              <IoBag className="me-3 mb-1" />
              Add to cart
            </button>
          </div>
        </div>

        <div className="inner">
          <div className="d-flex">
            <span>SALE</span>
            <img src={bottolThree} className="ms-4" alt="editableImage" />
          </div>
          <div className="text-center">
            <h6
              style={{
                fontStyle: "italic",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Ego Sum
            </h6>
            <h5
              style={{
                fontWeight: "600",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Extra Virgin Olive Oil,{" "}
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  display: "inline-block",
                  marginBottom: "0px",
                }}
              >
                {" "}
                500ml
              </p>
            </h5>
            <h6
              style={{
                color: "#B3A73A",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              229 rs
            </h6>

            <button
              style={{
                border: "1px solid #B3A73A",
                fontSize: "18px",
                fontWeight: "500",
                color: "#B3A73A",
                backgroundColor: "#fff",
                height: "50px",
                width: "222px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              <IoBag className="me-3 mb-1" />
              Add to cart
            </button>
          </div>
        </div>

        <div className="inner">
          <div className="d-flex">
            <span>SALE</span>
            <img src={bottolFour} className="ms-4" alt="editableImage" />
          </div>
          <div className="text-center">
            <h6
              style={{
                fontStyle: "italic",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              José Andrés
            </h6>
            <h5
              style={{
                fontWeight: "600",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Extra Virgin Olive Oil,{" "}
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  display: "inline-block",
                  marginBottom: "0px",
                }}
              >
                {" "}
                500ml
              </p>
            </h5>
            <h6
              style={{
                color: "#B3A73A",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              239 rs
            </h6>

            <button
              style={{
                border: "1px solid #B3A73A",
                fontSize: "18px",
                fontWeight: "500",
                color: "#B3A73A",
                backgroundColor: "#fff",
                height: "50px",
                width: "222px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              <IoBag className="me-3 mb-1" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          style={{
            width: "280px",
            height: "50px",
            borderRadius: "10px",
            color: "#ffffff",
            border: "1px solid #B3A73A",
            backgroundColor: "#B3A73A",
          }}
        >
          Shop all products <FaArrowRightLong className="ms-3" />
        </button>
      </div>
    </div>
  );
};

export default EdibleProductSection;
