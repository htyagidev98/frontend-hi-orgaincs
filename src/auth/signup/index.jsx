import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../utils/helper";
import ApiEndPoint from "../../utils/apiEnpPoint";
import ButtonLoader from "../../component/buttonLoader";
const Signup = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    full_name: "",
    gender: "",
    password: "",
    date_of_birth: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [eye, setEye] = useState({
    password: false,
    confirm_password: false,
  });
  const [formError, setFormError] = useState({
    full_nameError: "",
    genderError: "",
    passwordError: "",
    date_of_birthError: "",
    confirm_passwordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "full_name") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          full_nameError: "",
        });
      } else {
        setFormError({
          ...formError,
          full_nameError: "Full name is required",
        });
      }
    }
    if (name === "gender") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          genderError: "",
        });
      } else {
        setFormError({
          ...formError,
          genderError: "Gender is required",
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
    if (name === "date_of_birth") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          date_of_birthError: "",
        });
      } else {
        setFormError({
          ...formError,
          date_of_birthError: "Date of birth is required",
        });
      }
    }
    if (name === "confirm_password") {
      if (value.length > 0) {
        setFormError({
          ...formError,
          confirm_passwordError: "",
        });
      } else {
        setFormError({
          ...formError,
          confirm_passwordError: "Confirm Password is required",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.password &&
      !formData.confirm_password &&
      !formData.full_name &&
      !formData.gender &&
      !formData.date_of_birth
    ) {
      setFormError({
        ...formError,
        full_nameError: "Full Name is required",
        passwordError: "Password is required",
        confirm_passwordError: "Confirm Password is required",
        genderError: "Gender is required",
        date_of_birthError: "Date of birth is required",
      });
    } else if (!formData.full_name) {
      setFormError({
        ...formError,
        full_nameError: "Full Name is required",
      });
    } else if (!formData.gender) {
      setFormError({
        ...formError,
        genderError: "Gender is required",
      });
    } else if (!formData.date_of_birth) {
      setFormError({
        ...formError,
        date_of_birthError: "Date of birth is required",
      });
    } else if (!formData.password) {
      setFormError({
        ...formError,
        passwordError: "Password is required",
      });
    } else if (!formData.confirm_password) {
      setFormError({
        ...formError,
        confirm_passwordError: "Confirm Password is required",
      });
    } else if (formData.password !== formData.confirm_password) {
      setFormError({
        ...formError,
        confirm_passwordError: "Password and confirm password must match",
      });
    } else {
      if (
        formData.full_name &&
        formData.password &&
        formData.confirm_password &&
        formData.date_of_birth &&
        formData.gender
      ) {
        try {
          setLoading(true);
          const payload = {
            user_id: state?.main,
            password: formData?.password,
            name: formData?.full_name,
            gender: formData?.gender,
            dateOfBirth: formData?.date_of_birth,
          };
          const res = await axios.put(
            `${BASE_URL}${ApiEndPoint.Signup}`,
            payload
          );
          if (res.status === 200) {
            toast.success(res.data);
            navigate("/login");
          }
          setLoading(false);
        } catch (error) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
      }
    }
  };
  const handleToggleEye = (field) => {
    setEye({ ...eye, [field]: !eye[field] });
  };
  return (
    <div className="signupWrapper vh-100 d-flex justify-content-center align-items-center">
      <div
        className={
          formError.full_nameError ||
          formError.passwordError ||
          formError.confirm_passwordError ||
          formError.date_of_birthError ||
          formError.genderError
            ? "form_container border rounded p-4 border-danger"
            : " form_container border rounded p-4"
        }
        style={{ width: "500px" }}
      >
        <h4 className="text-center mb-3">REGISTRATION FORM </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className={formError.full_nameError ? "border-danger" : ""}
            />
          </Form.Group>
          {formError.full_nameError && (
            <p className="text-danger">{formError.full_nameError} </p>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
              className={formError.genderError ? "border-danger" : ""}
            />
          </Form.Group>
          {formError.genderError && (
            <p className="text-danger">{formError.genderError} </p>
          )}
          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={eye.password ? "text" : "password"}
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
            <div
              style={{ position: "absolute", right: "10px", top: "5px" }}
              className="cursor"
            >
              {eye.password ? (
                <FaEye onClick={() => handleToggleEye("password")} />
              ) : (
                <FaEyeSlash onClick={() => handleToggleEye("password")} />
              )}
            </div>
          </div>

          <div className="position-relative">
            <Form.Group className="mb-3" controlId="formBasicCofirmPassword">
              <Form.Control
                type={eye.confirm_password ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className={
                  formError.confirm_passwordError ? "border-danger" : ""
                }
              />
            </Form.Group>
            {formError.confirm_passwordError && (
              <p className="text-danger">{formError.confirm_passwordError} </p>
            )}
            <div
              style={{ position: "absolute", right: "10px", top: "5px" }}
              className="cursor"
            >
              {eye.confirm_password ? (
                <FaEye onClick={() => handleToggleEye("confirm_password")} />
              ) : (
                <FaEyeSlash
                  onClick={() => handleToggleEye("confirm_password")}
                />
              )}
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              placeholder="Date of birth"
              className={formError.date_of_birthError ? "border-danger" : ""}
            />
          </Form.Group>
          {formError.date_of_birthError && (
            <p className="text-danger">{formError.date_of_birthError} </p>
          )}
          <button
            className={
              formError.full_nameError ||
              formError.genderError ||
              formError.passwordError ||
              formError.confirm_passwordError ||
              formError.date_of_birthError
                ? "custom_buttom bg-danger text-white"
                : "custom_buttom conditionaly_back text-white"
            }
            type="submit"
          >
            {loading ? <ButtonLoader /> : "Submit"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
