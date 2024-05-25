import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/helper";
import ApiEndPoint from "../../utils/apiEnpPoint";
import ButtonLoader from "../../component/buttonLoader";
import { toast } from "react-toastify";
import bgImage from "../../assets/demofigmabg.png";
import "./index.css";
const VerifyOtpForCreateAccount = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    user_id: state?.main,
    otp: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({
    otpError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "otp") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          otpError: "",
        });
      } else {
        setFormError({
          ...formError,
          otpError: "OTP is required",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.otp) {
      setFormError({
        ...formError,
        otpError: "OTP is required",
      });
    } else {
      if (formData.otp && formData.user_id) {
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.VarifyOtp}`,
            formData
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/signup", {
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
    <div className="otpWrapperCreateAccount">
      <div
        className={
          formError.otpError
            ? "form_container border rounded p-4 border-danger"
            : " form_container  rounded p-4"
        }
        style={{
          width: "500px",
          border: "1px solid #92BAF5",
          backgroundColor: "#fff",
        }}
      >
        <h4 className="text-center mb-3">Enter OTP </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control
              type="number"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              className={formError.otpError ? "border-danger" : ""}
            />
          </Form.Group>
          <span style={{ color: "#464F43", fontWeight: "bold" }}>
            {" "}
            20 seconds left{" "}
          </span>
          {formError.otpError && (
            <p className="text-danger">{formError.otpError} </p>
          )}

          <button
            className={
              formError.otpError
                ? "custom_buttom bg-danger text-white mt-5"
                : "custom_buttom conditionaly_back text-white mt-5"
            }
            type="submit"
          >
            <span>{loading ? <ButtonLoader /> : "Verify OTP"} </span>{" "}
          </button>
          <button
            className={"custom_buttom  conditionaly_back text-white mt-3"}
            type="submit"
          >
            <span>{loading ? <ButtonLoader /> : "Resend Otp"} </span>{" "}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtpForCreateAccount;
