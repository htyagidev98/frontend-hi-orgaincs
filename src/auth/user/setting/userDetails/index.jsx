import React, { useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
const UserDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      full_name: "",
      dateof_birth: "",
      email: "",
      phone: "",
    },
    inputError: {
      full_name: "",
      dateof_birth: "",
      email: "",
      phone: "",
    },
  });

  const [image, setImage] = useState(null);
  const inputRef = useRef();
  const [dragging, setDragging] = useState(false);
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    setImage(files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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

    if (name === "dateof_birth") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            dateof_birth: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            dateof_birth: "Date of birth is required",
          },
        }));
      }
    }

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
            phone: "Phone is required",
          },
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.inputData.full_name &&
      !formData.inputData.dateof_birth &&
      !formData.inputData.email &&
      !formData.inputData.phone
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          full_name: "Full name is required",
          dateof_birth: "Date of birth required",
          email: "Email is required",
          phone: "Phone is required",
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
    } else if (!formData.inputData.dateof_birth) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          dateof_birth: "Date of birth is required",
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
    } else if (!formData.inputData.phone) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          phone: "Phone is required",
        },
      }));
    } else {
      if (
        formData.inputData.full_name &&
        formData.inputData.dateof_birth &&
        formData.inputData.email &&
        formData.inputData.phone
      ) {
        console.log(formData.inputData);
      }
    }
  };
  return (
    <div className="userdetailsWrapper container-fluid">
      <div className="uploadSection">
        <Form.Label className="fw-bold">Photo*</Form.Label>
        <div
          className={`${
            dragging ? "bg-success text-white inner_data" : "inner_data"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="dragzimage"
              className="w-100 h-100 rounded"
            />
          ) : dragging ? (
            "Dropping..."
          ) : (
            <span>
              Drag and drop or <br /> click here to select <br /> file
            </span>
          )}

          <input
            type="file"
            className="d-none"
            ref={inputRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </div>
      <div className="form_wrapper">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label className="fw-bold">Full name*</Form.Label>
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
              <button type="submit">Update</button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="fw-bold">Date of Birth*</Form.Label>
              <Form.Group className="mb-3 w-25" controlId="formBasicDob">
                <Form.Control
                  type="text"
                  name="dateof_birth"
                  value={formData.inputData.dateof_birth}
                  onChange={handleChange}
                  placeholder="Enter date of birth"
                />
              </Form.Group>
              {formData.inputError.dateof_birth && (
                <p className="text-danger">
                  {formData.inputError.dateof_birth}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="fw-bold">Email*</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.inputData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
              </Form.Group>
              {formData.inputError.email && (
                <p className="text-danger">{formData.inputError.email} </p>
              )}
            </Col>

            <Col>
              <Form.Label className="fw-bold">Phone*</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.inputData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone"
                />
              </Form.Group>
              {formData.inputError.phone && (
                <p className="text-danger">{formData.inputError.phone} </p>
              )}
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default UserDetails;
