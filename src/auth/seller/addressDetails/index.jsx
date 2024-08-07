import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonLoader from "../../../component/buttonLoader";
import { BASE_URL, onChangeToNumber } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import { toast } from "react-toastify";
import axios from "axios";
const AddressDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      full_name: "",
      phone: "",
      alt_phone: "",
      pincode: "",
      state: "",
      city: "",
      house_building: "",
      road_colony: "",
      landmark: "",
    },
    inputError: {
      full_name: "",
      phone: "",
      alt_phone: "",
      pincode: "",
      state: "",
      city: "",
      house_building: "",
      road_colony: "",
      landmark: "",
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
        [name]:
          name === "phone" || name === "alt_phone"
            ? onChangeToNumber(value)
            : value,
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

    if (name === "phone") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            phone: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            phone: "Phone number is required",
          },
        }));
      }
    }

    if (name === "alt_phone") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            alt_phone: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            alt_phone: "Alternate phone number is required",
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

    if (name === "state") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            state: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            state: "State is required",
          },
        }));
      }
    }

    if (name === "city") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            city: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            city: "City is required",
          },
        }));
      }
    }

    if (name === "house_building") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            house_building: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            house_building: "House building is required",
          },
        }));
      }
    }

    if (name === "road_colony") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            road_colony: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            road_colony: "Road or colony is required",
          },
        }));
      }
    }

    if (name === "landmark") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            landmark: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            landmark: "Landmark is required",
          },
        }));
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.inputData.full_name &&
      !formData.inputData.phone &&
      !formData.inputData.alt_phone &&
      !formData.inputData.city &&
      !formData.inputData.state &&
      !formData.inputData.pincode &&
      !formData.inputData.house_building &&
      !formData.inputData.landmark &&
      !formData.inputData.road_colony
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          full_name: "Full name is required",
          phone: "Phone is required",
          alt_phone: "Alternate phone is required",
          pincode: "Pin code is required",
          state: "State is required",
          city: "City is required",
          house_building: "House or building is required",
          road_colony: "Road or colony is required",
          landmark: "Landmark is required",
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
    } else if (!formData.inputData.phone) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          phone: "Phone is required",
        },
      }));
    } else if (!formData.inputData.alt_phone) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          alt_phone: "Alternate phone is required",
        },
      }));
    } else if (!formData.inputData.city) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          city: "City is required",
        },
      }));
    } else if (!formData.inputData.house_building) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          house_building: "House or building is required",
        },
      }));
    } else if (!formData.inputData.landmark) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          landmark: "Landmark is required",
        },
      }));
    } else if (!formData.inputData.road_colony) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          road_colony: "Road or colony is required",
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
    } else if (!formData.inputData.state) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          pincode: "State is required",
        },
      }));
    } else {
      const payload = {
        user_id: state?.main,
        contact_no: formData?.inputData.phone,
        alternateContact_no: formData?.inputData?.alt_phone,
        name: formData?.inputData?.full_name,
        pincode: formData?.inputData?.pincode,
        locality: formData.inputData.road_colony,
        address: formData?.inputData.house_building,
        city: formData?.inputData?.city,
        state: formData?.inputData?.state,
        landmark: formData?.inputData?.landmark,
      };
      if (
        formData.inputData.full_name &&
        formData.inputData.alt_phone &&
        formData.inputData.city &&
        formData.inputData.house_building &&
        formData.inputData.landmark &&
        formData.inputData.phone &&
        formData.inputData.pincode &&
        formData.inputData.road_colony &&
        formData.inputData.state
      ) {
        try {
          setLoading(true);
          const res = await axios.post(
            `${BASE_URL}${ApiEndPoint.SellerAddressDetails}`,
            payload
          );
          setLoading(false);
          if (res.status === 200) {
            toast.success(res?.data?.message);
            navigate("/seller/bankdetails", {
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

  useEffect(() => {
    const getData = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.postalpincode.in/pincode/${formData?.inputData?.pincode}`
        );
        if (res.data[0].Status === "404") {
          return;
        }

        setFormData((prev) => ({
          ...prev,
          inputData: {
            ...prev.inputData,
            city: res?.data[0]?.PostOffice[0]?.District || "",
            state: res?.data[0]?.PostOffice[0]?.State || "",
          },
        }));
      } catch (error) {
        console.log(error);
      }
    }, 2000);
    return () => clearTimeout(getData);
  }, [formData?.inputData?.pincode]);
  return (
    <div className="sellerAddressDetailWrapper">
      <span className="formheading">Pickup Address Details</span>
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
              <Form.Label> Phone Number</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  maxlength="10"
                  value={formData.inputData.phone}
                  placeholder="Enter phone"
                />
              </Form.Group>
              {formData.inputError.phone && (
                <p className="text-danger">{formData.inputError.phone} </p>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Alt Phone Number</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAltPhone">
                <Form.Control
                  type="text"
                  name="alt_phone"
                  maxlength="10"
                  onChange={handleChange}
                  placeholder="Enter alternate phone"
                  value={formData.inputData.alt_phone}
                />
              </Form.Group>
              {formData.inputError.alt_phone && (
                <p className="text-danger">{formData.inputError.alt_phone} </p>
              )}
            </Col>
            <Col>
              <Form.Label>Pin code</Form.Label>
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

          <Row className="mb-3">
            <Col>
              <Form.Label>State</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Control
                  type="text"
                  name="state"
                  onChange={handleChange}
                  placeholder="Enter state"
                  value={formData.inputData.state}
                  disabled
                />
              </Form.Group>
              {formData.inputError.state && (
                <p className="text-danger">{formData.inputError.state} </p>
              )}
            </Col>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control
                  type="text"
                  name="city"
                  onChange={handleChange}
                  placeholder="Enter city"
                  disabled
                  value={formData.inputData.city}
                />
              </Form.Group>
              {formData.inputError.city && (
                <p className="text-danger">{formData.inputError.city} </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>House Number, Building Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAddContachInfo">
                <Form.Control
                  type="text"
                  name="house_building"
                  onChange={handleChange}
                  placeholder="Enter house or building name"
                  value={formData.inputData.house_building}
                />
              </Form.Group>
              {formData.inputError.house_building && (
                <p className="text-danger">
                  {formData.inputError.house_building}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Road Name/ Colony Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicRoadcolony">
                <Form.Control
                  type="text"
                  name="road_colony"
                  onChange={handleChange}
                  placeholder="Enter road or colony name"
                  value={formData.inputData.road_colony}
                />
              </Form.Group>
              {formData.inputError.road_colony && (
                <p className="text-danger">
                  {formData.inputError.road_colony}{" "}
                </p>
              )}
            </Col>

            <Col>
              <Form.Label>Landmark</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicLandmark">
                <Form.Control
                  type="text"
                  name="landmark"
                  onChange={handleChange}
                  placeholder="Enter Landmark"
                  value={formData.inputData.landmark}
                />
              </Form.Group>
              {formData.inputError.landmark && (
                <p className="text-danger">{formData.inputError.landmark} </p>
              )}
            </Col>
          </Row>

          <button type="submit">{loading ? <ButtonLoader /> : "Submit"}</button>
        </Form>
      </div>
    </div>
  );
};

export default AddressDetails;
