import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import { BASE_URL } from "../../../utils/helper";
import axios from "axios";
import { toast } from "react-toastify";
import ButtonLoader from "../../../component/buttonLoader";

const VerifySignupOtpForSeller = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    inputData: {
      user_id: state?.main,
      otp: "",
    },
    inputError: {
      otp: "",
    },
  });
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
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
      if (formData?.inputData?.otp && formData?.inputData?.user_id) {
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.VarifyOtp}`,
            formData.inputData
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/seller/shopdetails", {
              state: {
                main: res.data?.data?.user_id,
              },
            });
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
      }
    }
  };

  return (
    <div className="sellerVarifySignupotpWrapper">
      <div className="form_wrapper mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Label>OTP Verification</Form.Label>
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
              {loading ? (
                <ButtonLoader />
              ) : (
                <span>
                  Submit <FaArrowRight className="ms-2 mb-1" />
                </span>
              )}
            </button>
            <button type="button">
              Resend OTP <FaArrowRight className="ms-2 mb-1" />
            </button>
          </div>
          <div className="text-center mt-5 text-gray">26 seconds</div>
        </Form>
      </div>
    </div>
  );
};

export default VerifySignupOtpForSeller;
