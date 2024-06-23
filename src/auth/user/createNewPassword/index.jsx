import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import axios from "axios";
import ButtonLoader from "../../../component/buttonLoader";
import createnewpassword from "../../../assets/createnewpassword.jfif";
import "./index.css";
const CreateNewPassword = () => {
  const [formData, setFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [formError, setFormError] = useState({
    newpasswordError: "",
    confirmpasswordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "newpassword") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          newpasswordError: "",
        });
      } else {
        setFormError({
          ...formError,
          newpasswordError: "New Password is required",
        });
      }
    }
    if (name === "confirmpassword") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          confirmpasswordError: "",
        });
      } else {
        setFormError({
          ...formError,
          confirmpasswordError: "Confirm Password is required",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.newpassword && !formData.confirmpassword) {
      setFormError({
        ...formError,
        newpasswordError: "New Password is required",
        confirmpasswordError: "Confirm Password is required",
      });
    } else if (!formData.newpassword) {
      setFormError({
        ...formError,
        newpasswordError: "New Password is required",
      });
    } else if (!formData.confirmpassword) {
      setFormError({
        ...formError,
        confirmpasswordError: "Confirm Password is required",
      });
    } else if (formData.newpassword !== formData.confirmpassword) {
      setFormError({
        ...formError,
        confirmpasswordError: "Password must match",
      });
    } else {
      if (formData.newpassword && formData.confirmpassword) {
        const payload = {
          user_id: state?.main,
          password: formData?.newpassword,
        };
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.PasswordSet}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/login");
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
          console.log(error, "error");
        }
      }
    }
  };
  return (
    <div className="createnewpass_wrapper">
      <img src={createnewpassword} height={197} width={380} className="mb-5" />

      <div
        className={
          formError.newpasswordError || formError.confirmpasswordError
            ? "form_container  rounded p-4 border-danger"
            : " form_container  rounded p-4"
        }
        style={{
          width: "500px",
          border: "1px solid #92BAF5",
          backgroundColor: "#fff",
        }}
      >
        <h4 className="text-center mb-3">New Password</h4>
        <Form onSubmit={handleSubmit}>
          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={eye ? "text" : "password"}
                placeholder="New Password"
                name="newpassword"
                value={formData.newpassword}
                onChange={handleChange}
                className={formError.newpasswordError ? "border-danger" : ""}
              />
            </Form.Group>
            {formError.newpasswordError && (
              <p className="text-danger">{formError.newpasswordError} </p>
            )}
            <div
              style={{ position: "absolute", right: "10px", top: "5px" }}
              className="d-none"
            >
              {eye ? (
                <FaEye onClick={() => setEye(!eye)} />
              ) : (
                <FaEyeSlash onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>

          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={eye ? "text" : "password"}
                placeholder="Enter Again"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                className={
                  formError.confirmpasswordError ? "border-danger" : ""
                }
              />
            </Form.Group>
            {formError.confirmpasswordError && (
              <p className="text-danger">{formError.confirmpasswordError} </p>
            )}
            <div
              style={{ position: "absolute", right: "10px", top: "5px" }}
              className="d-none"
            >
              {eye ? (
                <FaEye onClick={() => setEye(!eye)} />
              ) : (
                <FaEyeSlash onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>

          <button
            className={
              formError.newpasswordError || formError.confirmpasswordError
                ? "custom_buttom bg-danger text-white"
                : "custom_buttom conditionaly_back text-white"
            }
            type="submit"
          >
            {loading ? <ButtonLoader /> : "Set Password"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
