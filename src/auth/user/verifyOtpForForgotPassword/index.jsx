import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import ButtonLoader from "../../../component/buttonLoader";
import { toast } from "react-toastify";
import bgImageforgototp from "../../../assets/enterotpimage.png";
import "./index.css";
const VerifyOtpForForgotPassword = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    otp: "",
    user_id: state?.main,
  });
  const [timeLeft, setTimeLeft] = useState(20);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
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
            `${BASE_URL}${ApiEndPoint.VarifyOtpForrgotPassword}`,
            formData
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/createnewpassword", {
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

  const handleResendOtp = async (e) => {
    e.preventDefault();
    // Logic to resend OTP
    // Reset the timer and disable the button again
    setTimeLeft(20);
    setIsResendDisabled(true);
    // You can add the logic to resend OTP here
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      setIsResendDisabled(false);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="otpWrapperforforgotpassword">
      <img src={bgImageforgototp} height={200} width={423} className="mb-3" />

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

          {/*timeLeft > 0 ? (
            <span style={{ color: "#464F43", fontWeight: "bold" }}>
              {" "}
              {timeLeft} seconds left{" "}
            </span>
          ) : (
            <span style={{ color: "#464F43", fontWeight: "bold" }}>
              OTP has expired. Please request a new one.
            </span>
          )}
          {formError.otpError && (
            <p className="text-danger">{formError.otpError} </p>
          )*/}

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
            className={
              isResendDisabled
                ? "custom_buttom  text-white mt-3 bg-danger"
                : "custom_buttom  conditionaly_back text-white mt-3"
            }
            type="submit"
            disabled
          >
            <span>Resend Otp </span>{" "}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtpForForgotPassword;
