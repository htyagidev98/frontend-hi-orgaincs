import React from "react";
import image1 from "../../../assets/ract1.png";
import image2 from "../../../assets/ract2.png";
import image3 from "../../../assets/ract3.png";
import image4 from "../../../assets/ract4.png";
const AddProduct = () => {
  return (
    <div className="addproductWrapper vh-100">
      <h3 style={{ letterSpacing: "1px" }}>Categories</h3>
      <div className="row pt-4">
        <div className="col-md-3">
          <div className="cursor">
            <img src={image1} alt="ractone" className="img-fluid" />
            <h5
              className="text-white fw-bold"
              style={{
                position: "relative",
                bottom: "40px",
                left: "53px",
                letterSpacing: "1px",
              }}
            >
              Fertilizers
            </h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="cursor">
            <img src={image2} alt="ractone" className="img-fluid" />
            <h5
              className="text-white fw-bold"
              style={{
                position: "relative",
                bottom: "40px",
                left: "53px",
                letterSpacing: "1px",
              }}
            >
              Home Decor
            </h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="cursor">
            <img src={image3} alt="ractone" className="img-fluid" />
            <h5
              className="text-white fw-bold"
              style={{
                position: "relative",
                bottom: "40px",
                left: "53px",
                letterSpacing: "1px",
              }}
            >
              Grocery
            </h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="cursor">
            <img src={image4} alt="ractone" className="img-fluid" />
            <h5
              className="text-white fw-bold"
              style={{
                position: "relative",
                bottom: "40px",
                left: "53px",
                letterSpacing: "1px",
              }}
            >
              Pots & Plants
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
