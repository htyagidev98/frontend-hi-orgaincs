import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import axios from "axios";
import { BASE_URL } from "../../../utils/helper";
import { toast } from "react-toastify";
import ButtonLoader from "../../../component/buttonLoader";
const SellerLogin = () => {
  const [formData, setFormData] = useState({
    inputData: {
      email: "",
      password: "",
    },
    inputError: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const [eye, setEye] = useState(false);

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

    if (name === "email") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            email: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            email: "Email is required",
          },
        }));
      }
    }

    if (name === "password") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            password: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            password: "Password is required",
          },
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.inputData.email && !formData.inputData.password) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          email: "Email is required",
          password: "Password is required",
        },
      }));
    } else if (!formData.inputData.email) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          email: "Email is required",
        },
      }));
    } else if (!formData.inputData.password) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          password: "Password is required",
        },
      }));
    } else {
      if (formData.inputData.email && formData.inputData.password) {
        const payload = {
          user: formData?.inputData?.email,
          password: formData?.inputData?.password,
        };
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.SellerLogin}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            if (res?.data?.data?.accessToken) {
              navigate("/seller/dashboard");
              localStorage.setItem("token", res?.data?.data?.accessToken);
            } else {
              navigate("/seller/varifyloginotp", {
                state: {
                  main: res.data?.data?.user_id,
                },
              });
            }
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
    <div className="sellerloginWrapper">
      <span className="formheading">Login</span>
      <div className="form_wrapper mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Enter Email ID</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={formData.inputData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </Form.Group>
          {formData.inputError.email && (
            <p className="text-danger">{formData.inputError.email} </p>
          )}
          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type={eye ? "text" : "password"}
                value={formData.inputData.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            {formData.inputError.password && (
              <p className="text-danger">{formData.inputError.password} </p>
            )}

            <div
              style={{
                position: "absolute",
                right: "10px",
                top: "37px",
                cursor: "pointer",
              }}
            >
              {eye ? (
                <FaEye onClick={() => setEye(!eye)} />
              ) : (
                <FaEyeSlash onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <button type="button">
              Forgot Password <FaArrowRight className="ms-2 mb-1" />
            </button>
            <div>
              Don't have an account{" "}
              <NavLink className={"fw-bold ms-3"} to="/seller/createaccount">
                Create an account
              </NavLink>{" "}
            </div>
          </div>
          <div className="mt-5 text-center">
            {" "}
            <button type="submit">
              {loading ? (
                <ButtonLoader />
              ) : (
                <span>
                  Login <FaArrowRight className="ms-2 mb-1" />
                </span>
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SellerLogin;
