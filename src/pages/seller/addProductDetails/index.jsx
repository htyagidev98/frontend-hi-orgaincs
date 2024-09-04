import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import axiosInstance from "../../../services/axiosInstance";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import ButtonLoader from "../../../component/buttonLoader";

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
      images_url_One: null,
      images_url_Two: null,
      images_url_Three: null,
      images_url_Four: null,
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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      inputData: {
        ...prev.inputData,
        [name]: type === "file" ? e.target.files[0] : value,
      },
    }));
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    console.log(formData.inputData);
    const payload = {};
    if (
      !formData.inputData.productName &&
      !formData.inputData.description &&
      !formData.inputData.manufacturerName &&
      !formData.inputData.MRP &&
      !formData.inputData.sellingPrice &&
      !formData.inputData.inventory &&
      !formData.inputData.materialType &&
      !formData.inputData.GSTNumber &&
      !formData.inputData.HSNCode &&
      !formData.inputData.searchKeywords &&
      !formData.inputData.packagingDimensionsLength &&
      !formData.inputData.packagingDimensionsWidth &&
      !formData.inputData.packagingDimensionsHeight &&
      !formData.inputData.packageWeight
    ) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          productName: "Product name is required",
          description: "description is required",
          manufacturerName: "Manufacturing name is required",
          MRP: "MRP is required",
          sellingPrice: "Selling price is required",
          inventory: "Inventory is Required",
          materialType: "Material type is required",
          GSTNumber: "GST number is required",
          HSNCode: "HSN Code is required",
          searchKeywords: "Search keywords is required",
          packagingDimensionsLength: "Pacaging Dimensions Length is required",
          packagingDimensionsWidth: "Pacaging Dimensions Width is required",
          packagingDimensionsHeight: "Pacaging Dimensions Height is required",
          packageWeight: "Package weight is required",
        },
      }));
    } else if (!formData.inputData.productName) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          productName: "Product name is required",
        },
      }));
    } else if (!formData.inputData.description) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          description: "description is required",
        },
      }));
    } else if (!formData.inputData.manufacturerName) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          manufacturerName: "Manufacturing name is required",
        },
      }));
    } else if (!formData.inputData.MRP) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          MRP: "MRP is required",
        },
      }));
    } else if (!formData.inputData.sellingPrice) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          sellingPrice: "Selling price is required",
        },
      }));
    } else if (!formData.inputData.inventory) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          inventory: "Inventory is required",
        },
      }));
    } else if (!formData.inputData.materialType) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          materialType: "Material type is required",
        },
      }));
    } else if (!formData.inputData.GSTNumber) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          GSTNumber: "GST number is required",
        },
      }));
    } else if (!formData.inputData.HSNCode) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          HSNCode: "HSN Code is required",
        },
      }));
    } else if (!formData.inputData.searchKeywords) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          searchKeywords: "Search keywords is required",
        },
      }));
    } else if (!formData.inputData.packagingDimensionsLength) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsLength: "Pacaging Dimensions Length is required",
        },
      }));
    } else if (!formData.inputData.packagingDimensionsWidth) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsWidth: "Pacaging Dimensions Width is required",
        },
      }));
    } else if (!formData.inputData.packagingDimensionsHeight) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsHeight: "Pacaging Dimensions Height is required",
        },
      }));
    } else if (!formData.inputData.packageWeight) {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packageWeight: "Package weight is required",
        },
      }));
    } else {
      console.log(formData.inputData);
    }
    // try {
    //     setLoading(true);
    //       const res = await axiosInstance.post(
    //         `${BASE_URL}${ApiEndPoint.SellerAddProduct}`,
    //         payload
    //       );
    //       setLoading(false);

    // } catch (error) {
    //     toast.error(error?.response?.data?.message);
    //     setLoading(false);
    //     console.log(error, "error");
    // }
  };
  return (
    <div className="addProductDetailsWrapper">
      <h3 style={{ letterSpacing: "1px" }}>Product details</h3>
      <div className="formWrapper">
        <Form onSubmit={handleSubmitData}>
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
                <Form.Control
                  type="text"
                  name="productName"
                  value={formData.inputData.productName}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  onChange={handleInputChange}
                  value={formData.inputData.description}
                />
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
                <Form.Control
                  type="text"
                  name="manufacturerName"
                  onChange={handleInputChange}
                  value={formData.inputData.manufacturerName}
                />
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
                <Form.Control
                  type="text"
                  name="Brand"
                  onChange={handleInputChange}
                  value={formData.inputData.Brand}
                />
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
                      name="size"
                      onChange={handleInputChange}
                      value={formData.inputData.size}
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
                      <Form.Control
                        type="text"
                        name="itemDimensionsLength"
                        onChange={handleInputChange}
                        value={formData.inputData.itemDimensionsLength}
                        placeholder="Length"
                      />
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
                      <Form.Control
                        type="text"
                        placeholder="Width"
                        name="itemDimensionsWidth"
                        onChange={handleInputChange}
                        value={formData.inputData.itemDimensionsWidth}
                      />
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
                      <Form.Control
                        type="text"
                        name="packagingDimensionsLength"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsLength}
                        placeholder="Length"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex me-3"
                      controlId="formBasicWidth"
                    >
                      <Form.Control
                        type="text"
                        name="packagingDimensionsWidth"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsWidth}
                        placeholder="Width"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicHeight"
                    >
                      <Form.Control
                        type="text"
                        name="packagingDimensionsHeight"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsHeight}
                        placeholder="Height"
                      />
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
                    <Form.Control
                      type="text"
                      name="packageWeight"
                      onChange={handleInputChange}
                      value={formData.inputData.packageWeight}
                    />
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
              <Form.Control
                type="text"
                name="MRP"
                onChange={handleInputChange}
                value={formData.inputData.MRP}
              />
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
              <Form.Control
                type="text"
                name="sellingPrice"
                onChange={handleInputChange}
                value={formData.inputData.sellingPrice}
              />
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
              <Form.Control
                type="text"
                name="colorsAvailable"
                onChange={handleInputChange}
                value={formData.inputData.colorsAvailable}
              />
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
              <Form.Control
                type="text"
                name="inventory"
                onChange={handleInputChange}
                value={formData.inputData.inventory}
              />
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
              <Form.Control
                type="text"
                name="materialType"
                onChange={handleInputChange}
                value={formData.inputData.materialType}
              />
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
              <Form.Control
                type="text"
                name="GSTNumber"
                onChange={handleInputChange}
                value={formData.inputData.GSTNumber}
              />
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
              <Form.Select
                aria-label="Default select example"
                name="HSNCode"
                onChange={handleInputChange}
                value={formData.inputData.HSNCode}
              >
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
              <Form.Control
                type="text"
                name="searchKeywords"
                onChange={handleInputChange}
                value={formData.inputData.searchKeywords}
              />
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
              <Form.Control
                as="textarea"
                rows={5}
                name="additionalInformation"
                onChange={handleInputChange}
                value={formData.inputData.additionalInformation}
              />
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
                <label
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  htmlFor="image1"
                >
                  {formData.inputData.images_url_One === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData.inputData.images_url_One
                      )}
                      className="img-fluid"
                      style={{ height: "100%" }}
                    />
                  )}

                  <input
                    className="form-control d-none"
                    type="file"
                    name="images_url_One"
                    id="image1"
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="col-md-3">
                <label
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  htmlFor="image2"
                >
                  {formData.inputData.images_url_Two === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData.inputData.images_url_Two
                      )}
                      className="img-fluid"
                      style={{ height: "100%" }}
                    />
                  )}

                  <input
                    className="form-control d-none"
                    type="file"
                    name="images_url_Two"
                    id="image2"
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="col-md-3">
                <label
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  htmlFor="image3"
                >
                  {formData.inputData.images_url_Three === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData.inputData.images_url_Three
                      )}
                      className="img-fluid"
                      style={{ height: "100%" }}
                    />
                  )}

                  <input
                    className="form-control d-none"
                    type="file"
                    name="images_url_Three"
                    id="image3"
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="col-md-3">
                <label
                  style={{
                    border: "1px dashed rgba(76, 175, 80, 1)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "214px",
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  htmlFor="image4"
                >
                  {formData.inputData.images_url_Four === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData.inputData.images_url_Four
                      )}
                      className="img-fluid"
                      style={{ height: "100%" }}
                    />
                  )}

                  <input
                    className="form-control d-none"
                    type="file"
                    name="images_url_Four"
                    id="image4"
                    onChange={handleInputChange}
                  />
                </label>
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
                type="submit"
              >
                {loading ? <ButtonLoader /> : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProductDetails;
