import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./index.css";
import { toast } from "react-toastify";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [formError, setFormError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "email") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          emailError: "",
        });
      } else {
        setFormError({
          ...formError,
          emailError: "Email is required",
        });
      }
    }
    if (name === "password") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          passwordError: "",
        });
      } else {
        setFormError({
          ...formError,
          passwordError: "Password is required",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email && !formData.password) {
      setFormError({
        ...formError,
        emailError: "Email is required",
        passwordError: "Password is required",
      });
    } else if (!formData.email) {
      setFormError({
        ...formError,
        emailError: "Email is required",
      });
    } else if (!formData.password) {
      setFormError({
        ...formError,
        passwordError: "Password is required",
      });
    } else {
      console.log(formData);
      navigate("/");
      toast.success("Looged in Successfully");
    }
  };
  return (
    <div className="loginWrapper vh-100 d-flex justify-content-center align-items-center">
      <div
        className={
          formError.emailError || formError.passwordError
            ? "form_container border rounded p-4 border-danger"
            : " form_container border rounded p-4"
        }
        style={{ width: "500px" }}
      >
        <h4 className="text-center mb-3">Sign In </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={formError.emailError ? "border-danger" : ""}
            />
          </Form.Group>
          {formError.emailError && (
            <p className="text-danger">{formError.emailError} </p>
          )}
          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={eye ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={formError.passwordError ? "border-danger" : ""}
              />
            </Form.Group>
            {formError.passwordError && (
              <p className="text-danger">{formError.passwordError} </p>
            )}
            <div style={{ position: "absolute", right: "10px", top: "5px" }}>
              {eye ? (
                <FaEye onClick={() => setEye(!eye)} />
              ) : (
                <FaEyeSlash onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <NavLink to="/forgotpassword" className="nav-link">
              Forgot Password
            </NavLink>
          </div>
          <button
            className={
              formError.emailError || formError.passwordError
                ? "custom_buttom bg-danger text-white"
                : "custom_buttom conditionaly_back text-white"
            }
            type="submit"
          >
            Login
          </button>
          <div className="d-flex justify-content-center mt-3">
            <span>Don't have account?</span>
            <NavLink to="/createaccount" className={"nav-link fw-bold ms-2"}>
              Register
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
