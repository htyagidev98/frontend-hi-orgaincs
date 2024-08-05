import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import { BASE_URL } from "../../../utils/helper";
import { toast } from "react-toastify";
import ButtonLoader from "../../../component/buttonLoader";
const CreateSellerAccount = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    inputData: {
      otporemail: "",
    },
    inputError: {
      otporemail: "",
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

    if (name === "otporemail") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            otporemail: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            otporemail: "Otp or email is required",
          },
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.inputData.otporemail) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          otporemail: "Otp or email is required",
        },
      }));
    } else {
      if (formData.inputData.otporemail) {
        const payload = {
          user: formData.inputData.otporemail,
        };
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.CreateSellerAccount}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/seller/signup/verifyotp", {
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
    <div className="sellerCreateAccountWrapper">
      <span className="formheading mt-3">
        Create your account and start selling on Hi Organics
      </span>
      <div className="form_wrapper mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Phone or Email ID</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="otporemail"
              value={formData.inputData.otporemail}
              onChange={handleChange}
              placeholder="Enter phone number or email"
            />
          </Form.Group>
          {formData.inputError.otporemail && (
            <p className="text-danger">{formData.inputError.otporemail} </p>
          )}
          <div className="d-flex justify-content-between align-items-center mt-5">
            <button type="submit">
              {loading ? <ButtonLoader /> : "Send otp"}{" "}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateSellerAccount;
