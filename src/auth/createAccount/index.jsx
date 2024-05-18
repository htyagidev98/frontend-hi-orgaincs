import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    emailorpassword: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.emailorpassword) {
      setFormError({
        ...formError,
        emailorpasswordError: "Email or password is required",
      });
    } else {
      console.log(formData, "response from createpassword");
      navigate("/enterotp");
    }
  };
  return (
    <div className="createAccountWrapper vh-100 d-flex justify-content-center align-items-center">
      <div
        className={
          formError.emailorpasswordError
            ? "form_container border rounded p-4 border-danger"
            : " form_container border rounded p-4"
        }
        style={{ width: "500px" }}
      >
        <h4 className="text-center mb-3">Create Account </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
            className={
              formError.emailorpasswordError
                ? "custom_buttom bg-danger text-white"
                : "custom_buttom conditionaly_back text-white"
            }
            type="submit"
          >
            Send Otp
          </button>
          <div className="d-flex justify-content-center mt-3">
            <span>Already have account?</span>
            <NavLink to="/login" className={"nav-link fw-bold ms-2"}>
              Login
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccount;
