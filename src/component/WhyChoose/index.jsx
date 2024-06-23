import React from "react";
import "./index.css";
import leafImage from "../../assets/whychooseleaf.png";
const WhyChooseUs = () => {
  return (
    <div className="whychoose_wrapper">
      <div className="inner">
        <span className="heading">Why Choose Us ?</span>
        <p className="para">
          By building a culture of sustainability and wholesome living, we
          strive for a healthier you and a healthier planet.
        </p>
        <img src={leafImage} alt="leafImageleft" className="leafImageleft" />
        <img src={leafImage} alt="leafImageright" className="leafImageright" />
      </div>
      <div className="text-center">
        <button>Know More</button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
