import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";
import { toast } from "react-toastify";

const LicenseEntry = () => {
  const [formData, setFormData] = useState({
    inputData: {
      firmName: "",
      licenceNumber: "",
      licenceState: "",
      issueDate: "",
      expiryDate: "",
      pdfFile: "",
    },
    inputError: {
      firmName: "",
      licenceNumber: "",
      licenceState: "",
      issueDate: "",
      expiryDate: "",
      pdfFile: "",
    },
  });

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdfFile") {
      if (files[0]?.type === "application/pdf") {
        setFormData((prev) => ({
          ...prev,
          inputData: {
            ...prev.inputData,
            pdfFile: files[0],
          },
        }));
      } else {
        toast.error("Only pdf file is supported");
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        inputData: {
          ...prev.inputData,
          [name]: value,
        },
      }));
    }
    if (name === "firmName") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          firmName: value.length > 0 ? "" : "Firm name is required",
        },
      }));
    } else if (name === "licenceNumber") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          licenceNumber: value.length > 0 ? "" : "Licence number is required",
        },
      }));
    } else if (name === "licenceState") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          licenceState: value.length > 0 ? "" : "Licence State is required",
        },
      }));
    } else if (name === "issueDate") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          issueDate: value.length > 0 ? "" : "Issue date is required",
        },
      }));
    } else if (name === "expiryDate") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          expiryDate: value.length > 0 ? "" : "Expiry date is required",
        },
      }));
    } else if (name === "pdfFile") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          pdfFile: value.length > 0 ? "" : "Pdf file is required",
        },
      }));
    } else {
      console.log(formData.inputData);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.inputData.firmName &&
      !formData.inputData.licenceNumber &&
      !formData.inputData.licenceState &&
      !formData.inputData.issueDate &&
      !formData.inputData.expiryDate &&
      !formData.inputData.pdfFile
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          firmName: "Firm name is required",
          licenceNumber: "Licence number is required",
          licenceState: "Licence state is required",
          issueDate: "Issue date is required",
          expiryDate: "Expiry date is required",
          pdfFile: "Pdf file is required",
        },
      }));
    } else if (!formData.inputData.firmName) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          firmName: "Firm name is required",
        },
      }));
    } else if (!formData.inputData.licenceNumber) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          licenceNumber: "Licence number is required",
        },
      }));
    } else if (!formData.inputData.licenceState) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          licenceState: "Licence state is required",
        },
      }));
    } else if (!formData.inputData.issueDate) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          issueDate: "Issue date is required",
        },
      }));
    } else if (!formData.inputData.expiryDate) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          expiryDate: "Expiry date is required",
        },
      }));
    } else if (!formData.inputData.pdfFile) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          pdfFile: "Pdf file is required",
        },
      }));
    } else {
      if (
        formData.inputData.firmName &&
        formData.inputData.licenceNumber &&
        formData.inputData.licenceState &&
        formData.inputData.issueDate &&
        formData.inputData.expiryDate &&
        formData.inputData.pdfFile
      ) {
        console.log(formData.inputData);
      }
    }
  };
  return (
    <div className="licenseentry_wrapper p-4">
      <h3 style={{ letterSpacing: "1px" }}>License Entry</h3>
      <div className="form_container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirmName">
            <Form.Label
              style={{
                color: "rgba(115, 115, 115, 1)",
                fontSize: "20px",
              }}
            >
              Firm Name
            </Form.Label>
            <Form.Control
              type="text"
              name="firmName"
              value={formData?.inputData?.firmName}
              onChange={handleInput}
            />
          </Form.Group>
          {formData.inputError.firmName && (
            <p className="text-danger">{formData.inputError.firmName} </p>
          )}
          <Form.Group className="mb-3" controlId="formBasicLicenseNumber">
            <Form.Label
              style={{
                color: "rgba(115, 115, 115, 1)",
                fontSize: "20px",
              }}
            >
              License No.
            </Form.Label>
            <Form.Control
              type="text"
              name="licenceNumber"
              value={formData?.inputData?.licenceNumber}
              onChange={handleInput}
            />
          </Form.Group>
          {formData.inputError.licenceNumber && (
            <p className="text-danger">{formData.inputError.licenceNumber} </p>
          )}

          <Form.Group className="mb-3" controlId="formBasicLicenseState">
            <Form.Label
              style={{
                color: "rgba(115, 115, 115, 1)",
                fontSize: "20px",
              }}
            >
              License Issue State
            </Form.Label>
            <Form.Control
              type="text"
              name="licenceState"
              value={formData?.inputData?.licenceState}
              onChange={handleInput}
            />
          </Form.Group>
          {formData.inputError.licenceState && (
            <p className="text-danger">{formData.inputError.licenceState} </p>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group className="mb-3 w-50" controlId="formBasicIssueDate">
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Issue date
              </Form.Label>
              <Form.Control
                type="text"
                name="issueDate"
                value={formData?.inputData?.issueDate}
                onChange={handleInput}
              />
              {formData.inputError.issueDate && (
                <p className="text-danger mt-3">
                  {formData.inputError.issueDate}{" "}
                </p>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3 w-50 ms-4"
              controlId="formBasicExpiryDate"
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Expiry Date
              </Form.Label>
              <Form.Control
                type="text"
                name="expiryDate"
                value={formData?.inputData?.expiryDate}
                onChange={handleInput}
              />
              {formData.inputError.expiryDate && (
                <p className="text-danger mt-3">
                  {formData.inputError.expiryDate}{" "}
                </p>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3 w-50" controlId="formBasicPdf">
            <Form.Label
              style={{
                color: "rgba(115, 115, 115, 1)",
                fontSize: "20px",
              }}
            >
              Upload PDF of License
            </Form.Label>
            <label
              className="btn d-block mt-2"
              htmlFor="uploadpdf1"
              style={{
                backgroundColor: "rgba(76, 175, 80, 1)",
                borderRadius: "10px",
                width: "120px",
                height: "43px",
                border: "ipx solid rgba(217, 217, 217, 1)",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <MdOutlineFileUpload className="fw-bold" size={20} />
              <span className="ms-2"> Upload</span>
            </label>
            <input
              type="file"
              className="d-none"
              name="pdfFile"
              onChange={handleInput}
              id="uploadpdf1"
            />
            {formData?.inputData?.pdfFile && (
              <p className="mt-2 text-success">
                {formData?.inputData?.pdfFile?.name}{" "}
              </p>
            )}
          </Form.Group>
          {formData.inputError.pdfFile && (
            <p className="text-danger">{formData.inputError.pdfFile} </p>
          )}
          <p
            style={{
              color: "rgba(115, 115, 115, 1)",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Note: This step is mandatory for sellers dealing with fertilizers
            and groceries. Ensure the uploaded document is clear and legible.
          </p>
          <div className="text-end">
            <button
              type="submit"
              style={{
                backgroundColor: "rgba(76, 175, 80, 1)",
                borderRadius: "100px",
                width: "203px",
                height: "43px",
                border: "1px solid rgba(217, 217, 217, 1)",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Verify
            </button>
          </div>
        </Form>
      </div>
      <div
        className="mt-5 p-3"
        style={{
          border: "1px solid rgba(165, 255, 169, 1)",
          borderRadius: "20px",
        }}
      >
        <h5
          style={{
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Note -
        </h5>
        <p
          style={{
            color: "rgba(115, 115, 115, 1)",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          After submitting your product license for review, please wait for our
          approval. Once your license is verified, you will be able to add your
          products to the marketplace. Thank you for your patience and
          cooperation.
        </p>
      </div>
    </div>
  );
};

export default LicenseEntry;
