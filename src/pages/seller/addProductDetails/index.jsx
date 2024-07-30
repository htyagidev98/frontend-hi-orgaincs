import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";

const AddProductDetails = () => {
  const [formData, setFormData] = useState({
    inputData: {
      productName: "",
      description: "",
      manufacturerName: "",
      Brand: "",
      MRP: "",
      colorsAvailable: "",
      inventory: "",
      materialType: "",
      GSTNumber: "",
      HSNCode: "",
      searchKeywords: "",
      additionalInformation: "",
      size: "",
      itemDimensionsLength: "",
      itemDimensionsWidth: "",
      packagingDimensionsLength: "",
      packagingDimensionsWidth: "",
      packagingDimensionsHeight: "",
      packageWeight: "",
      sellingPrice: "",
      unitCount: 0,
    },

    inputError: {
      productName: "",
      description: "",
      manufacturerName: "",
      MRP: "",
      inventory: "",
      materialType: "",
      GSTNumber: "",
      HSNCode: "",
      searchKeywords: "",
      packagingDimensionsLength: "",
      packagingDimensionsWidth: "",
      packagingDimensionsHeight: "",
      packageWeight: "",
      sellingPrice: "",
    },
  });
  return (
    <div className="addProductDetailsWrapper">
      <h3 style={{ letterSpacing: "1px" }}>Product details</h3>
      <div className="formWrapper">
        <Form>
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label
                  style={{
                    color: "rgba(115, 115, 115, 1)",
                    fontSize: "20px",
                  }}
                >
                  Product Name*
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicProductDescription"
              >
                <Form.Label
                  style={{
                    color: "rgba(115, 115, 115, 1)",
                    fontSize: "20px",
                  }}
                >
                  Description of the product*
                </Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicManufacturingName"
              >
                <Form.Label
                  style={{
                    color: "rgba(115, 115, 115, 1)",
                    fontSize: "20px",
                  }}
                >
                  Manufacturer Name*
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBrand">
                <Form.Label
                  style={{
                    color: "rgba(115, 115, 115, 1)",
                    fontSize: "20px",
                  }}
                >
                  Brand
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="w-50 ms-3">
              <h3
                style={{
                  letterSpacing: "1px",
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Package Details
              </h3>
              <div
                style={{
                  border: "1px solid rgba(217, 217, 217, 1)",
                  borderRadius: "20px",
                  marginTop: "14px",
                  padding: "10px",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div className="w-25">
                    <Form.Label
                      style={{
                        color: "rgba(115, 115, 115, 1)",
                        fontSize: "20px",
                      }}
                    >
                      Unit Count
                    </Form.Label>
                    <div className="d-flex">
                      <div
                        style={{
                          border: "1px solid rgba(217, 217, 217, 1)",
                          borderRadius: "10px",
                          width: "78px",
                          height: "53px",
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {formData.inputData.unitCount}
                      </div>

                      <div
                        style={{
                          border: "1px solid rgba(217, 217, 217, 1)",
                          borderRadius: "10px",
                          width: "34px",
                          height: "53px",
                          textAlign: "center",
                          marginLeft: "8px",
                        }}
                      >
                        <div className="cursor">
                          <IoMdArrowDropup
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                inputData: {
                                  ...prev.inputData,
                                  unitCount: prev.inputData.unitCount + 1,
                                },
                              }));
                            }}
                            size={20}
                            color="rgba(76, 175, 80, 1)"
                          />
                        </div>

                        <IoMdArrowDropdown
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              inputData: {
                                ...prev.inputData,
                                unitCount:
                                  prev.inputData.unitCount > 0
                                    ? prev.inputData.unitCount - 1
                                    : 0,
                              },
                            }));
                          }}
                          size={20}
                          className="cursor"
                          color="rgba(76, 175, 80, 1)"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-75 ms-3">
                    <Form.Label
                      style={{
                        color: "rgba(115, 115, 115, 1)",
                        fontSize: "20px",
                      }}
                    >
                      Size
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      style={{ height: "53px" }}
                    >
                      <option> Select Size</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="itemdimanesion mt-4">
                  <Form.Label
                    style={{
                      color: "rgba(115, 115, 115, 1)",
                      fontSize: "20px",
                    }}
                  >
                    Item Dimensions
                  </Form.Label>
                  <div className="d-flex justify-content-between">
                    <Form.Group
                      className="mb-3 d-flex me-3"
                      controlId="formBasicLength"
                    >
                      <Form.Control type="text" placeholder="Length" />
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "rgba(76, 175, 80, 1)",
                          height: "43px",
                          width: "42px",
                          borderRadius: "10px",
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontWeight: "600px",
                        }}
                      >
                        in
                      </span>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex "
                      controlId="formBasicWidth"
                    >
                      <Form.Control type="text" placeholder="Width" />
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "rgba(76, 175, 80, 1)",
                          height: "43px",
                          width: "42px",
                          borderRadius: "10px",
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontWeight: "600px",
                        }}
                      >
                        in
                      </span>
                    </Form.Group>
                  </div>
                </div>
                <div className="mt-2 pacagingdimension">
                  <Form.Label
                    style={{
                      color: "rgba(115, 115, 115, 1)",
                      fontSize: "20px",
                    }}
                  >
                    Packaging Dimensions*
                  </Form.Label>
                  <div className="d-flex justify-content-between">
                    <Form.Group
                      className="mb-3 d-flex me-3"
                      controlId="formBasicLength"
                    >
                      <Form.Control type="text" placeholder="Length" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex me-3"
                      controlId="formBasicWidth"
                    >
                      <Form.Control type="text" placeholder="Width" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicHeight"
                    >
                      <Form.Control type="text" placeholder="Height" />
                    </Form.Group>
                  </div>
                </div>
                <div className="mt-2">
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPackageWeight"
                  >
                    <Form.Label
                      style={{
                        color: "rgba(115, 115, 115, 1)",
                        fontSize: "20px",
                      }}
                    >
                      Package Weight*
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-50 me-3" controlId="formBasicMrp">
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                MRP*
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="formBasicSellingPrice*"
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Selling Price*{" "}
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between">
            <Form.Group
              className="mb-3  me-3"
              controlId="formBasicColors Available"
              style={{ width: "30%" }}
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Colors Available
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 "
              controlId="formBasicInventory"
              style={{ width: "30%" }}
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Inventory*
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 "
              controlId="formBasicMaterialType"
              style={{ width: "30%" }}
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Material Type*
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between">
            <Form.Group
              className="mb-3 w-50 me-3"
              controlId="formBasicGST Number*"
            >
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                GST Number*
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="formBasicHSN Code">
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                HSN Code*
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>{" "}
            </Form.Group>
          </div>
          <div className="">
            <Form.Group className="mb-3" controlId="formBasicSearchKeywords">
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Search Keywords*{" "}
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgba(115, 115, 115, 1)",
                    fontWeight: "600",
                  }}
                >
                  (Please enter up to 5 tags to help your product be easily
                  searched)
                </span>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="">
            <Form.Group className="mb-3" controlId="formBasicAdditionalInfo">
              <Form.Label
                style={{
                  color: "rgba(115, 115, 115, 1)",
                  fontSize: "20px",
                }}
              >
                Additional Information{" "}
              </Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </div>
          <div className="addproductImage">
            <Form.Label
              style={{
                color: "rgba(115, 115, 115, 1)",
                fontSize: "20px",
              }}
            >
              Add Product Image*
            </Form.Label>
            <div className="row">
              <div className="col-md-3">
                <div
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiPlusSquare
                    size={40}
                    color="rgba(115, 115, 115, 1)
"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiPlusSquare
                    size={40}
                    color="rgba(115, 115, 115, 1)
"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiPlusSquare
                    size={40}
                    color="rgba(115, 115, 115, 1)
"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "242px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiPlusSquare
                    size={40}
                    color="rgba(115, 115, 115, 1)
"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mt-5">
              <button
                style={{
                  border: "1px solid rgba(76, 175, 80, 1)",
                  borderRadius: "100px",
                  padding: "10px 70px 10px 70px",
                  color: "rgba(30, 30, 30, 1)",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "50px",
                }}
              >
                Save to Draft
              </button>
              <button
                style={{
                  backgroundColor: "rgba(76, 175, 80, 1)",
                  borderRadius: "100px",
                  padding: "10px 70px 10px 70px",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "20px",
                  fontWeight: "600",
                  border: "0",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProductDetails;
