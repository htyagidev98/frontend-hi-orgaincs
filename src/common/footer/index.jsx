import React from "react";
import { NavLink } from "react-router-dom";
import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";
import footer4 from "../../assets/footer4.png";
import footer5 from "../../assets/footer5.png";

import "./index.css";
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <section className="top_section">
        <div className="row">
          <div className="col-md-3">
            <NavLink className="nav-link first_row_anchor" to="/">
              General
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              About Us
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Our Shop
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Recipes
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Blog
            </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink className="nav-link first_row_anchor" to="/">
              Webshop
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Delivery Information
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Returns & Cancellations
            </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink className="nav-link first_row_anchor" to="/">
              Legal
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Terms of Use
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Terms of Purchase
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Privacy Policy
            </NavLink>

            <NavLink className="nav-link bottom_row_anchor" to="/">
              Modern Slavery Policy{" "}
            </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink className="nav-link first_row_anchor" to="/">
              Contact{" "}
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Facebook{" "}
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Twitter{" "}
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Instagram{" "}
            </NavLink>
            <NavLink className="nav-link bottom_row_anchor" to="/">
              Youtube{" "}
            </NavLink>
          </div>
        </div>
      </section>

      <section className="bottom_section">
        <div className="d-flex justidy-content-between align-items-center">
          <div className="inner">
            <img src={footer5} />
            <span>Sustainable Farming Techniques</span>
          </div>
          <div className="inner">
            <img src={footer2} />
            <span>Chemical Pesticide-free</span>
          </div>
          <div className="inner">
            <img src={footer3} />
            <span>Non-GMO Produce</span>
          </div>
          <div className="inner">
            <img src={footer4} />
            <span>Locally Ethically Sourced</span>
          </div>
          <div className="inner">
            <img src={footer1} />
            <span>189 Global Testing Standards</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
