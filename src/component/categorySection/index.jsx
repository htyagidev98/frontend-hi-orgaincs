import React from "react";
import "./index.css";
import categoryImageOne from "../../assets/category1.png";
import categoryImageTwo from "../../assets/category2.png";
import categoryImageThree from "../../assets/category3.png";
import { IoIosArrowForward } from "react-icons/io";

const CategorySection = () => {
  return (
    <div className="category_wrapper">
      <section className="categorysection_wrapper">
        <h2 className="heading_categories">OUR BEST CATEGORIES</h2>
      </section>
      <section className="card_wrapper">
        <div className="card_item">
          <img src={categoryImageOne} alt="categoryImage" />
          <h6>Pulses</h6>
          <p>Purchasing from select family farmers who farms organically</p>
          <button>ORDER NOW</button>
        </div>

        <div className="card_item">
          <img src={categoryImageTwo} alt="categoryImage" />
          <h6>Flour</h6>
          <p>Purchasing from select family farmers who farms organically</p>
          <button>ORDER NOW</button>
        </div>

        <div className="card_item">
          <img src={categoryImageThree} alt="categoryImage" />
          <h6>Rice</h6>
          <p>Purchasing from select family farmers who farms organically</p>
          <button>ORDER NOW </button>
        </div>

        <div className="card_item_info">
          <h6>Others</h6>
          <p>Milk, Pickle, Spice, etc.</p>
          <button>
            See Others{" "}
            <span className="ms-1">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
