import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
import ButtonLoader from "../../../component/buttonLoader";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import { toast } from "react-toastify";
import axios from "axios";
const ShopDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    inputData: {
      full_name: "",
      shop_business_name: "",
      new_password: "",
      confirm_password: "",
    },
    inputError: {
      full_name: "",
      shop_business_name: "",
      new_password: "",
      confirm_password: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      inputData: {
        ...prev.inputData,
        [name]: value,
      },
    }));

    if (name === "full_name") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            full_name: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            full_name: "Full name is required",
          },
        }));
      }
    }

    if (name === "shop_business_name") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            shop_business_name: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            shop_business_name: "Shop or business name is required",
          },
        }));
      }
    }

    if (name === "new_password") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            new_password: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            new_password: "New password is required",
          },
        }));
      }
    }

    if (name === "confirm_password") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            confirm_password: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            confirm_password: "Confirm password is required",
          },
        }));
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.inputData.full_name &&
      !formData.inputData.shop_business_name &&
      !formData.inputData.new_password &&
      !formData.inputData.confirm_password
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          full_name: "Full name is required",
          shop_business_name: "Shop or business name is required",
          new_password: "New password is required",
          confirm_password: "Confirm password is required",
        },
      }));
    } else if (!formData.inputData.full_name) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          full_name: "Full name is required",
        },
      }));
    } else if (!formData.inputData.shop_business_name) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          shop_business_name: "Shop or business name is required",
        },
      }));
    } else if (!formData.inputData.new_password) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          new_password: "New password is required",
        },
      }));
    } else if (!formData.inputData.confirm_password) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          confirm_password: "Confirm password is required",
        },
      }));
    } else if (
      formData.inputData.new_password !== formData.inputData.confirm_password
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          confirm_password: "Password must match",
        },
      }));
    } else {
      const payload = {
        user_id: state?.main,
        password: formData?.inputData?.new_password,
        name: formData.inputData.full_name,
        businessName: formData?.inputData?.shop_business_name,
      };
      if (
        formData.inputData.full_name &&
        formData.inputData.shop_business_name &&
        formData.inputData.new_password &&
        formData.inputData.confirm_password
      ) {
        try {
          setLoading(true);
          const res = await axios.put(
            `${BASE_URL}${ApiEndPoint.SellerShopDetails}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/seller/addressdetails");
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="sellerShopDetailWrapper">
      <span className="formheading">
        Fill in Your Shop Details For Better Connectivity
      </span>
      <div className="form_wrapper mt-3">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label>Full name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Control
                  type="text"
                  name="full_name"
                  value={formData.inputData.full_name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
              </Form.Group>
              {formData.inputError.full_name && (
                <p className="text-danger">{formData.inputError.full_name} </p>
              )}
            </Col>
            <Col>
              <Form.Label>Shop Name / Business Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicShopName">
                <Form.Control
                  type="text"
                  name="shop_business_name"
                  onChange={handleChange}
                  value={formData.inputData.shop_business_name}
                  placeholder="Enter shop name / business name"
                />
              </Form.Group>
              {formData.inputError.shop_business_name && (
                <p className="text-danger">
                  {formData.inputError.shop_business_name}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>New Password</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicNewPassword">
                <Form.Control
                  type="text"
                  name="new_password"
                  onChange={handleChange}
                  placeholder="Enter new password"
                  value={formData.inputData.new_password}
                />
              </Form.Group>
              {formData.inputError.new_password && (
                <p className="text-danger">
                  {formData.inputError.new_password}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  type="text"
                  name="confirm_password"
                  onChange={handleChange}
                  placeholder="Enter confirm password"
                  value={formData.inputData.confirm_password}
                />
              </Form.Group>
              {formData.inputError.confirm_password && (
                <p className="text-danger">
                  {formData.inputError.confirm_password}{" "}
                </p>
              )}
            </Col>
          </Row>

          <button type="submit">{loading ? <ButtonLoader /> : "Submit"}</button>
        </Form>
      </div>
    </div>
  );
};

export default ShopDetails;
