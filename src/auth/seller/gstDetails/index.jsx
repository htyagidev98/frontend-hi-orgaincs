import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
import axios from "axios";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonLoader from "../../../component/buttonLoader";
export const GstDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      Business_Name: "",
      Gst_Number: "",
      Pan_Number: "",
    },
    inputError: {
      Business_Name: "",
      Gst_Number: "",
      Pan_Number: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

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

    if (name === "Business_Name") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Business_Name: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Business_Name: "Business name is required",
          },
        }));
      }
    }

    if (name === "Gst_Number") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Gst_Number: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Gst_Number: "Gst number is required",
          },
        }));
      }
    }

    if (name === "Pan_Number") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Pan_Number: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Pan_Number: "Pan Number is required",
          },
        }));
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.inputData.Business_Name &&
      !formData.inputData.Gst_Number &&
      !formData.inputData.Pan_Number
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          Business_Name: "Business name is required",
          Gst_Number: "Gst number is required",
          Pan_Number: "Pan number is required",
        },
      }));
    } else if (!formData.inputData.Business_Name) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          Business_Name: "Business name is required",
        },
      }));
    } else if (!formData.inputData.Gst_Number) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          Gst_Number: "Gst number is required",
        },
      }));
    } else if (!formData.inputData.Pan_Number) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          Pan_Number: "Pan number is required",
        },
      }));
    } else {
      const payload = {
        user_id: state?.main,
        pan: formData?.inputData?.Pan_Number,
        gst: formData?.inputData?.Gst_Number,
        name: formData?.inputData?.Business_Name,
      };
      if (
        formData.inputData.Business_Name &&
        formData.inputData.Gst_Number &&
        formData.inputData.Pan_Number
      ) {
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.SellerGstDetails}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/seller/login");
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="bankDetailsWrapper">
      <span className="formheading">Seller GST Details </span>
      <div className="form_wrapper mt-3">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Business Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicBusinessname">
                <Form.Control
                  type="text"
                  name="Business_Name"
                  onChange={handleChange}
                  placeholder="Enter business name"
                  value={formData.inputData.Business_Name}
                />
              </Form.Group>
              {formData.inputError.Business_Name && (
                <p className="text-danger">
                  {formData.inputError.Business_Name}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>GST Number</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicGstNumber">
                <Form.Control
                  type="text"
                  name="Gst_Number"
                  onChange={handleChange}
                  placeholder="Enter Gst number"
                  value={formData.inputData.Gst_Number}
                  className="text-uppercase"
                />
              </Form.Group>
              {formData.inputError.Gst_Number && (
                <p className="text-danger">{formData.inputError.Gst_Number} </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>PAN Number</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPanNumber">
                <Form.Control
                  type="text"
                  name="Pan_Number"
                  onChange={handleChange}
                  placeholder="Enter pan number"
                  value={formData.inputData.Pan_Number}
                  className="text-uppercase"
                />
              </Form.Group>
              {formData.inputError.Pan_Number && (
                <p className="text-danger">{formData.inputError.Pan_Number} </p>
              )}
            </Col>
          </Row>
          <button type="submit">{loading ? <ButtonLoader /> : "Submit"}</button>
        </Form>
      </div>
    </div>
  );
};
