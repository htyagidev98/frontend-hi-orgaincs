import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";

import "./index.css";
const Blog = () => {
  return (
    <div className="blogWrapper container-fluid">
      <section className="first_section">
        <h5>Blogs</h5>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h4 className="text-center mt-3">
              5 Different Uses of Cloves to Try at <br /> Home
            </h4>
            <div className="text-center mb-3">
              <span className="fw-bold"> Posted: </span>
              <span>July 25, 2022</span>
            </div>
            <img src={blog2} alt="blogimage" className="img-fluid" />
          </div>

          <div className="col-md-5 mx-auto">
            <h4 className="text-center mt-3">
              Whole Wheat Flour vs Regular Wheat Flour - Here’s what’s Healthier
            </h4>
            <div className="text-center mb-3">
              <span className="fw-bold"> Posted: </span>
              <span>July 25, 2022</span>
            </div>
            <img src={blog1} alt="blogimage" className="img-fluid" />
          </div>
        </div>
      </section>
      <section className="second_section">
        <h4>NEVER MISS ANOTHER UPDATE</h4>
        <p>
          Be the first to know! Get the latest news on Organic Tattva, straight
          in to your inbox.
        </p>
        <div className="mt-3 mb-5">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>

        <div className="social_links">
          <span className="me-4">
            <FaFacebookF size={25} />
          </span>
          <span className="me-4">
            <FaTwitter size={25} />
          </span>
          <span className="me-4">
            <FaPinterestP size={25} />
          </span>
          <span className="me-4">
            <IoLogoInstagram size={25} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Blog;
