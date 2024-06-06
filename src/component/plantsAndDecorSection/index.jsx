import React from "react";
import "./index.css";
import plantOne from "../../assets/plant1.png";
import plantTwo from "../../assets/plant2.png";
import plantThree from "../../assets/plant3.png";
import plantFour from "../../assets/plant4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const PlantAndDecorSection = () => {
  return (
    <div className="plantAndDecorSection_wrapper">
      <div className="heading_wrapper">
        <h2>OUR PLANTS AND DECOR </h2>
        <h2 className="product_head_color">PRODUCTS </h2>
      </div>
      <div className="card_wrapper">
        <div className="inner">
          <img src={plantOne} alt="cardimage" />
          <h6>Plants </h6>
        </div>

        <div className="inner">
          <img src={plantTwo} alt="cardimage" />
          <h6>Seeds </h6>
        </div>

        <div className="inner">
          <img src={plantThree} alt="cardimage" />
          <h6>Pots & Planters </h6>
        </div>

        <div className="inner">
          <img src={plantFour} alt="cardimage" />
          <h6>Plant Care </h6>
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

export default PlantAndDecorSection;
