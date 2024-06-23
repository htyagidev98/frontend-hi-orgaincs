import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "./index.css";

const VarifyLoginOTPForSeller = () => {
  const [formData, setFormData] = useState({
    inputData: {
      otp: "",
    },
    inputError: {
      otp: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      inputData: {
        ...prev.inputData,
        [name]: value,
      },
    }));

    if (name === "otp") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            otp: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            otp: "Otp is required",
          },
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.inputData.otp) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          otp: "Otp is required",
        },
      }));
    } else {
      if (formData.inputData.otp) {
        console.log(formData.inputData);
      }
    }
  };

  return (
    <div className="sellerVarifyotpWrapper">
      <span className="formheading">Login</span>
      <div className="form_wrapper mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Enter OTP</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="otp"
              value={formData.inputData.otp}
              onChange={handleChange}
              placeholder="Enter otp"
            />
          </Form.Group>
          {formData.inputError.otp && (
            <p className="text-danger">{formData.inputError.otp} </p>
          )}
          <div className="d-flex justify-content-between align-items-center mt-5">
            <button type="submit">
              Lets Go <FaArrowRight className="ms-2 mb-1" />
            </button>
            <button type="button">
              Resend OTP <FaArrowRight className="ms-2 mb-1" />
            </button>
          </div>
          <div className="text-center mt-5 text-gray">20 seconds</div>
        </Form>
      </div>
    </div>
  );
};

export default VarifyLoginOTPForSeller;
