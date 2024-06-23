import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
const ShopDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      full_name: "",
      shop_business_name: "",
      address: "",
      state_or_district: "",
      city_village_town: "",
      pincode: "",
      additional_contact_info: "",
    },
    inputError: {
      full_name: "",
      shop_business_name: "",
      address: "",
      state_or_district: "",
      city_village_town: "",
      pincode: "",
      additional_contact_info: "",
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

    if (name === "address") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            address: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            address: "Address is required",
          },
        }));
      }
    }

    if (name === "state_or_district") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            state_or_district: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            state_or_district: "State or district is required",
          },
        }));
      }
    }

    if (name === "city_village_town") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            city_village_town: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            city_village_town: "City or village or town is required",
          },
        }));
      }
    }

    if (name === "pincode") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            pincode: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            pincode: "Pin code is required",
          },
        }));
      }
    }

    if (name === "additional_contact_info") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            additional_contact_info: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            additional_contact_info:
              "Additional contact information is required",
          },
        }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.inputData.additional_contact_info &&
      !formData.inputData.address &&
      !formData.inputData.city_village_town &&
      !formData.inputData.full_name &&
      !formData.inputData.pincode &&
      !formData.inputData.shop_business_name &&
      !formData.inputData.state_or_district
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          full_name: "Full name is required",
          shop_business_name: "Shop or business name is required",
          address: "Address is required",
          state_or_district: "State or district is required",
          city_village_town: "City or village or town is required",
          pincode: "Pin code is required",
          additional_contact_info: "Additional contact information is required",
        },
      }));
    } else if (!formData.inputData.additional_contact_info) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          additional_contact_info: "Additional contact information is required",
        },
      }));
    } else if (!formData.inputData.address) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          address: "Address is required",
        },
      }));
    } else if (!formData.inputData.city_village_town) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          city_village_town: "City or village or town is required",
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
    } else if (!formData.inputData.pincode) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          pincode: "Pin code is required",
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
    } else if (!formData.inputData.state_or_district) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          shop_business_name: "State or district is required",
        },
      }));
    } else {
      if (
        formData.inputData.additional_contact_info &&
        formData.inputData.address &&
        formData.inputData.city_village_town &&
        formData.inputData.full_name &&
        formData.inputData.pincode &&
        formData.inputData.shop_business_name &&
        formData.inputData.state_or_district
      ) {
        console.log(formData.inputData);
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
              <Form.Label>Address</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder="Enter address"
                  value={formData.inputData.address}
                />
              </Form.Group>
              {formData.inputError.address && (
                <p className="text-danger">{formData.inputError.address} </p>
              )}
            </Col>
            <Col>
              <Form.Label>State / District</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicStateOrDistrict">
                <Form.Control
                  type="text"
                  name="state_or_district"
                  onChange={handleChange}
                  placeholder="Enter State / District"
                  value={formData.inputData.state_or_district}
                />
              </Form.Group>
              {formData.inputError.state_or_district && (
                <p className="text-danger">
                  {formData.inputError.state_or_district}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>City / Village / Town</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicCityVillageTown">
                <Form.Control
                  type="text"
                  name="city_village_town"
                  onChange={handleChange}
                  placeholder="Enter City / Village / Town"
                  value={formData.inputData.city_village_town}
                />
              </Form.Group>
              {formData.inputError.city_village_town && (
                <p className="text-danger">
                  {formData.inputError.city_village_town}{" "}
                </p>
              )}
            </Col>
            <Col>
              <Form.Label>Pincode</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPincode">
                <Form.Control
                  type="text"
                  name="pincode"
                  onChange={handleChange}
                  placeholder="Enter pin code"
                  value={formData.inputData.pincode}
                />
              </Form.Group>
              {formData.inputError.pincode && (
                <p className="text-danger">{formData.inputError.pincode} </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Additional Contact Information</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAddContachInfo">
                <Form.Control
                  type="text"
                  name="additional_contact_info"
                  onChange={handleChange}
                  placeholder="Enter Additional Contact Information"
                  value={formData.inputData.additional_contact_info}
                />
              </Form.Group>
              {formData.inputError.additional_contact_info && (
                <p className="text-danger">
                  {formData.inputError.additional_contact_info}{" "}
                </p>
              )}
            </Col>
          </Row>

          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default ShopDetails;
