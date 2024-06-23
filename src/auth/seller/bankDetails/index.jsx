import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./index.css";
export const BankDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      account_number: "",
      confirm_account_number: "",
      IFSC_code: "",
      Branch_Name: "",
      Account_holder_name: "",
    },
    inputError: {
      account_number: "",
      confirm_account_number: "",
      IFSC_code: "",
      Branch_Name: "",
      Account_holder_name: "",
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

    if (name === "account_number") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            account_number: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            account_number: "Account number is required",
          },
        }));
      }
    }

    if (name === "confirm_account_number") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            confirm_account_number: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            confirm_account_number: "Confirm account number is required",
          },
        }));
      }
    }

    if (name === "IFSC_code") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            IFSC_code: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            IFSC_code: "Ifsc code is required",
          },
        }));
      }
    }

    if (name === "Branch_Name") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Branch_Name: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Branch_Name: "Branch name is required",
          },
        }));
      }
    }

    if (name === "Account_holder_name") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Account_holder_name: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            Account_holder_name: "Account holder name is required",
          },
        }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.inputData.account_number &&
      !formData.inputData.confirm_account_number &&
      !formData.inputData.Branch_Name &&
      !formData.inputData.IFSC_code &&
      !formData.inputData.Account_holder_name
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          account_number: "Account number is required",
          confirm_account_number: "Confirm account number is required",
          Branch_Name: "Branch name is required",
          IFSC_code: "Ifsc code is required",
          Account_holder_name: "Account Holder name is required",
        },
      }));
    } else if (!formData.inputData.account_number) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          account_number: "Account number is required",
        },
      }));
    } else if (!formData.inputData.confirm_account_number) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          confirm_account_number: "Confirm account number is required",
        },
      }));
    } else if (
      formData.inputData.account_number !==
      formData.inputData.confirm_account_number
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          confirm_account_number: "Account number must match",
        },
      }));
    } else if (!formData.inputData.Branch_Name) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          Branch_Name: "Branch name is required",
        },
      }));
    } else if (!formData.inputData.Account_holder_name) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          Account_holder_name: "Account Holder name is required",
        },
      }));
    } else if (!formData.inputData.IFSC_code) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          IFSC_code: "Ifsc code is required",
        },
      }));
    } else {
      if (
        formData.inputData.Account_holder_name &&
        formData.inputData.Branch_Name &&
        formData.inputData.IFSC_code &&
        formData.inputData.account_number &&
        formData.inputData.confirm_account_number
      ) {
        console.log(formData.inputData);
      }
    }
  };
  return (
    <div className="bankDetailsWrapper">
      <span className="formheading">Seller Bank Details </span>
      <div className="form_wrapper mt-3">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Account Number</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAccountNumber">
                <Form.Control
                  type="text"
                  name="account_number"
                  onChange={handleChange}
                  placeholder="Enter account number"
                  value={formData.inputData.account_number}
                />
              </Form.Group>
              {formData.inputError.account_number && (
                <p className="text-danger">
                  {formData.inputError.account_number}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Group
                className="mb-3"
                controlId="formBasicConfirmAccountNumber"
              >
                <Form.Control
                  type="text"
                  name="confirm_account_number"
                  onChange={handleChange}
                  placeholder="Enter confirm account number"
                  value={formData.inputData.confirm_account_number}
                />
              </Form.Group>
              {formData.inputError.confirm_account_number && (
                <p className="text-danger">
                  {formData.inputError.confirm_account_number}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>IFSC code</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicIfsccode">
                <Form.Control
                  type="text"
                  name="IFSC_code"
                  onChange={handleChange}
                  placeholder="Enter confirm account number"
                  value={formData.inputData.IFSC_code}
                />
              </Form.Group>
              {formData.inputError.IFSC_code && (
                <p className="text-danger">{formData.inputError.IFSC_code} </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Branch Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicBranchName">
                <Form.Control
                  type="text"
                  name="Branch_Name"
                  onChange={handleChange}
                  placeholder="Enter Branch Name"
                  value={formData.inputData.Branch_Name}
                />
              </Form.Group>
              {formData.inputError.Branch_Name && (
                <p className="text-danger">
                  {formData.inputError.Branch_Name}{" "}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Group
                className="mb-3"
                controlId="formBasicAccountHolderName"
              >
                <Form.Control
                  type="text"
                  name="Account_holder_name"
                  onChange={handleChange}
                  placeholder="Enter Account Holder Name"
                  value={formData.inputData.Account_holder_name}
                />
              </Form.Group>
              {formData.inputError.Account_holder_name && (
                <p className="text-danger">
                  {formData.inputError.Account_holder_name}{" "}
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
