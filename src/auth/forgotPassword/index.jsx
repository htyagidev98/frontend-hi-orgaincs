import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/helper";
import ApiEndPoint from "../../utils/apiEnpPoint";
import { toast } from "react-toastify";
import ButtonLoader from "../../component/buttonLoader";
import bgImage from "../../assets/demofigmabg.png";
import "./index.css";
const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    emailorpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formError, setFormError] = useState({
    emailorpasswordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "emailorpassword") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          emailorpasswordError: "",
        });
      } else {
        setFormError({
          ...formError,
          emailorpasswordError: "Email or password is required",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.emailorpassword) {
      setFormError({
        ...formError,
        emailorpasswordError: "Email or password is required",
      });
    } else {
      if (formData.emailorpassword) {
        console.log(formData.emailorpassword);
      }
    }
  };
  return (
    <div className="forgotpassword_wrapper">
      <div
        className={
          formError.emailorpasswordError
            ? "form_container  rounded p-4 border-danger"
            : " form_container  rounded p-4"
        }
        style={{
          width: "500px",
          border: "1px solid #92BAF5",
          backgroundColor: "#fff",
        }}
      >
        <h4 className="text-center mb-3">Forget Password </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="emailorpassword"
              value={formData.emailorpassword}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              className={formError.emailorpasswordError ? "border-danger" : ""}
            />
          </Form.Group>
          {formError.emailorpasswordError && (
            <p className="text-danger">{formError.emailorpasswordError} </p>
          )}

          <button
            style={{ marginTop: "50px" }}
            className={
              formError.emailorpasswordError
                ? "custom_buttom bg-danger text-white"
                : "custom_buttom conditionaly_back text-white"
            }
            type="submit"
          >
            {loading ? <ButtonLoader /> : "Send Verification Code"}
          </button>
          <div className="d-flex justify-content-center mt-3">
            <span>Don't have an account?</span>
            <NavLink to="/createaccount" className={"nav-link fw-bold ms-2"}>
              Register
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
