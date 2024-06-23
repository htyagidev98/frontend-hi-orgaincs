import React, { useState } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
const ChangePassword = () => {
  const [formData, setFormData] = useState({
    inputData: {
      old_password: "",
      new_password: "",
      new_password_again: "",
    },
    inputError: {
      old_password: "",
      new_password: "",
      new_password_again: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      inputData: {
        ...prev.inputData,
        [name]: value,
      },
    }));

    if (name === "old_password") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            old_password: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            old_password: "Old password is required",
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

    if (name === "new_password_again") {
      if (value.length > 0) {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            new_password_again: "",
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inputError: {
            ...prev.inputError,
            new_password_again: "New password again is required",
          },
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.inputData.old_password &&
      !formData.inputData.new_password &&
      !formData.inputData.new_password &&
      !formData.inputData.new_password_again
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          old_password: "Old password is required",
          new_password: "New password is required",
          new_password_again: "New password again is required",
        },
      }));
    } else if (!formData.inputData.old_password) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          old_password: "Old password is required",
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
    } else if (!formData.inputData.new_password_again) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          new_password_again: "New password again is required",
        },
      }));
    } else {
      if (
        formData.inputData.old_password &&
        formData.inputData.new_password &&
        formData.inputData.new_password_again
      ) {
        console.log(formData.inputData);
      }
    }
  };
  return (
    <div className="changePasswordWrapper">
      <div className="form_wrapper w-50 m-auto mt-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="old_password"
              value={formData.inputData.old_password}
              onChange={handleChange}
              placeholder="Enter old password"
            />
          </Form.Group>
          {formData.inputError.old_password && (
            <p className="text-danger">{formData.inputError.old_password} </p>
          )}
          <Form.Group className="mb-4" controlId="formBasicNewPassword">
            <Form.Control
              type="text"
              name="new_password"
              value={formData.inputData.new_password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </Form.Group>
          {formData.inputError.new_password && (
            <p className="text-danger">{formData.inputError.new_password} </p>
          )}

          <Form.Group className="mb-3" controlId="formBasicNewAgainPassword">
            <Form.Control
              type="text"
              name="new_password_again"
              value={formData.inputData.new_password_again}
              onChange={handleChange}
              placeholder="Enter again new password"
            />
          </Form.Group>
          {formData.inputError.new_password_again && (
            <p className="text-danger">
              {formData.inputError.new_password_again}{" "}
            </p>
          )}
          <div className="text-center">
            <button type="submit">Save</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
