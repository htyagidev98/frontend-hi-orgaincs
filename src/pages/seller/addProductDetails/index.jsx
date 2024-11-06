import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import axiosInstance from "../../../services/axiosInstance";
import { BASE_URL } from "../../../utils/helper";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import ButtonLoader from "../../../component/buttonLoader";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const AddProductDetails = () => {
  const { state } = useLocation();
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
      images_url_One: "",
      images_url_Two: "",
      images_url_Three: "",
      images_url_Four: "",
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
    if (name === "productName") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          productName: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "description") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          description: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "manufacturerName") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          manufacturerName: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "MRP") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          MRP: value.length > 0 ? "" : "Required",
          sellingPrice:
            Number(value) > Number(prev.inputData.sellingPrice)
              ? ""
              : "Selling price must be smaller than MRP",
        },
      }));
    } else if (name === "inventory") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          inventory: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "materialType") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          materialType: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "GSTNumber") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          GSTNumber: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "HSNCode") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          HSNCode: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "searchKeywords") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          searchKeywords: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "packagingDimensionsLength") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsLength: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "packagingDimensionsWidth") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsWidth: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "packagingDimensionsHeight") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packagingDimensionsHeight: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "packageWeight") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          packageWeight: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "sellingPrice") {
      setFormData((prev) => {
        const sellingPriceError =
          value.length > 0
            ? Number(value) > Number(prev.inputData.MRP)
              ? "Selling price must be smaller than MRP"
              : ""
            : "Required";

        return {
          ...prev,
          inputError: {
            ...prev.inputError,
            sellingPrice: sellingPriceError,
          },
        };
      });
    } else if (name === "images_url_One") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          images_url_One: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "images_url_Two") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          images_url_Two: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "images_url_Three") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          images_url_Three: value.length > 0 ? "" : "Required",
        },
      }));
    } else if (name === "images_url_Four") {
      setFormData((prev) => ({
        ...prev,
        inputError: {
          ...prev.inputError,
          images_url_Four: value.length > 0 ? "" : "Required",
        },
      }));
    }
  };

  // const handleSubmitData = async (e) => {
  //   e.preventDefault();
  //   if (
  //     !formData.inputData.productName &&
  //     !formData.inputData.description &&
  //     !formData.inputData.manufacturerName &&
  //     !formData.inputData.MRP &&
  //     !formData.inputData.sellingPrice &&
  //     !formData.inputData.inventory &&
  //     !formData.inputData.materialType &&
  //     !formData.inputData.GSTNumber &&
  //     !formData.inputData.HSNCode &&
  //     !formData.inputData.searchKeywords &&
  //     !formData.inputData.packagingDimensionsLength &&
  //     !formData.inputData.packagingDimensionsWidth &&
  //     !formData.inputData.packagingDimensionsHeight &&
  //     !formData.inputData.packageWeight &&
  //     !formData.inputData.images_url_One &&
  //     !formData.inputData.images_url_Two &&
  //     !formData.inputData.images_url_Three &&
  //     !formData.inputData.images_url_Four
  //   ) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         productName: "Required",
  //         description: "Required",
  //         manufacturerName: "Required",
  //         MRP: "Required",
  //         sellingPrice: "Required",
  //         inventory: "Required",
  //         materialType: "Required",
  //         GSTNumber: "Required",
  //         HSNCode: "Required",
  //         searchKeywords: "Required",
  //         packagingDimensionsLength: "Required",
  //         packagingDimensionsWidth: "Required",
  //         packagingDimensionsHeight: "Required",
  //         packageWeight: "Required",
  //         images_url_One: "Required",
  //         images_url_Two: "Required",
  //         images_url_Three: "Required",
  //         images_url_Four: "Required",
  //       },
  //     }));
  //   } else if (!formData.inputData.productName) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         productName: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.description) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         description: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.manufacturerName) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         manufacturerName: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.MRP) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         MRP: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.sellingPrice) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         sellingPrice: "required",
  //       },
  //     }));
  //   } else if (
  //     parseFloat(formData.inputData.sellingPrice) >
  //     parseFloat(formData.inputData.MRP)
  //   ) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         sellingPrice: "Selling price must be smaller than MRP",
  //       },
  //     }));
  //   } else if (!formData.inputData.inventory) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         inventory: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.materialType) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         materialType: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.GSTNumber) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         GSTNumber: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.HSNCode) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         HSNCode: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.searchKeywords) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         searchKeywords: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.packagingDimensionsLength) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         packagingDimensionsLength: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.packagingDimensionsWidth) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         packagingDimensionsWidth: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.packagingDimensionsHeight) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         packagingDimensionsHeight: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.packageWeight) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         packageWeight: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.images_url_One) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         images_url_One: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.images_url_Two) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         images_url_Two: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.images_url_Three) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         images_url_Three: "required",
  //       },
  //     }));
  //   } else if (!formData.inputData.images_url_Four) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       inputError: {
  //         ...prev.inputError,
  //         images_url_Four: "required",
  //       },
  //     }));
  //   } else {
  //     if (
  //       formData.inputData.productName &&
  //       formData.inputData.description &&
  //       formData.inputData.manufacturerName &&
  //       formData.inputData.MRP &&
  //       formData.inputData.sellingPrice &&
  //       formData.inputData.inventory &&
  //       formData.inputData.materialType &&
  //       formData.inputData.GSTNumber &&
  //       formData.inputData.HSNCode &&
  //       // formData.inputData.searchKeywords &&
  //       formData.inputData.packagingDimensionsLength &&
  //       formData.inputData.packagingDimensionsWidth &&
  //       formData.inputData.packagingDimensionsHeight &&
  //       formData.inputData.packageWeight &&
  //       formData.inputData.images_url_One &&
  //       formData.inputData.images_url_Two &&
  //       formData.inputData.images_url_Three &&
  //       formData.inputData.images_url_Four
  //     ) {
  //       const images = [
  //         formData.inputData.images_url_One,
  //         formData.inputData.images_url_Two,
  //         formData.inputData.images_url_Three,
  //         formData.inputData.images_url_Four,
  //       ];

  //       const payload = {
  //         license_id: state?.license_id,
  //         category_id: state?.category_id,
  //         // searchKeywords: formData?.inputData?.searchKeywords,
  //         productName: formData?.inputData?.productName,
  //         description: formData?.inputData?.description,
  //         manufacturerName: formData?.inputData?.manufacturerName,
  //         brandName: formData?.inputData?.Brand,
  //         mrp: Number(formData?.inputData?.MRP),
  //         sellingPrice: Number(formData?.inputData?.sellingPrice),
  //         color: formData?.inputData?.colorsAvailable,
  //         inventory: Number(formData?.inputData?.inventory),
  //         materialtype: formData?.inputData?.materialType,
  //         taxCode: Number(formData?.inputData.GSTNumber),
  //         hsncode: Number(formData?.inputData?.HSNCode),
  //         unitCount: Number(formData?.inputData?.unitCount),
  //         size: formData?.inputData?.size,
  //         itemLength: Number(formData?.inputData?.itemDimensionsLength),
  //         itemBreadth: Number(formData?.inputData?.itemDimensionsWidth),
  //         packageHeight: Number(formData?.inputData?.packagingDimensionsHeight),
  //         packageBreadth: Number(formData?.inputData?.packagingDimensionsWidth),
  //         packageLength: Number(formData?.inputData?.packagingDimensionsLength),
  //         packageWeight: Number(formData?.inputData?.packageWeight),
  //         additionalInformation: formData?.inputData?.additionalInformation,
  //       };

  //       console.log(payload, "local FORMDATA");

  //       try {
  //         setLoading(true);
  //         const res = await axiosInstance.post(
  //           `${BASE_URL}${ApiEndPoint.SellerAddCatProduct}`,
  //           formDataToSend,
  //           {
  //             headers: {
  //               "Content-Type": "multipart/form-data",
  //             },
  //           }
  //         );
  //         setLoading(false);
  //       } catch (error) {
  //         toast.error(error?.response?.data?.message);
  //         setLoading(false);
  //         console.log(error, "error");
  //       }
  //     }
  //   }
  // };
  console.log(state, "state");

  const handleSubmitData = async (e) => {
    e.preventDefault();
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
      !formData.inputData.packageWeight &&
      !formData.inputData.images_url_One &&
      !formData.inputData.images_url_Two &&
      !formData.inputData.images_url_Three &&
      !formData.inputData.images_url_Four
    ) {
      // Set error messages if any fields are missing
    } else {
      const {
        images_url_One,
        images_url_Two,
        images_url_Three,
        images_url_Four,
      } = formData.inputData;

      // Initialize FormData object
      const formDataToSend = new FormData();

      // Array of images
      const imagesArray = [
        images_url_One,
        images_url_Two,
        images_url_Three,
        images_url_Four,
      ];

      // const searchkat = ["Hello", "Hii", "Main"];

      // Append each file to formData as user_file[]
      imagesArray.forEach((file) => {
        if (file instanceof File) {
          formDataToSend.append("user_file", file);
        }
      });

      // searchKeywords: formData?.inputData?.searchKeywords,

      // Append other fields to formData
      if (state?.license_id) {
        formDataToSend.append("license_id", state.license_id);
      }
      // formDataToSend.append("searchKeywords", searchkat);
      formDataToSend.append("category_id", state?.category_id);

      formDataToSend.append("productName", formData?.inputData?.productName);
      formDataToSend.append("description", formData?.inputData?.description);
      formDataToSend.append(
        "manufacturerName",
        formData?.inputData?.manufacturerName
      );
      formDataToSend.append("brandName", formData?.inputData?.Brand);
      formDataToSend.append("mrp", Number(formData?.inputData?.MRP));
      formDataToSend.append(
        "sellingPrice",
        Number(formData?.inputData?.sellingPrice)
      );
      formDataToSend.append("color", formData?.inputData?.colorsAvailable);
      formDataToSend.append(
        "inventory",
        Number(formData?.inputData?.inventory)
      );
      formDataToSend.append("materialtype", formData?.inputData?.materialType);
      formDataToSend.append("taxCode", Number(formData?.inputData.GSTNumber));
      formDataToSend.append("hsncode", Number(formData?.inputData?.HSNCode));
      formDataToSend.append(
        "unitCount",
        Number(formData?.inputData?.unitCount)
      );
      formDataToSend.append("size", formData?.inputData?.size);
      formDataToSend.append(
        "itemLength",
        Number(formData?.inputData?.itemDimensionsLength)
      );
      formDataToSend.append(
        "itemBreadth",
        Number(formData?.inputData?.itemDimensionsWidth)
      );
      formDataToSend.append(
        "packageHeight",
        Number(formData?.inputData?.packagingDimensionsHeight)
      );
      formDataToSend.append(
        "packageBreadth",
        Number(formData?.inputData?.packagingDimensionsWidth)
      );
      formDataToSend.append(
        "packageLength",
        Number(formData?.inputData?.packagingDimensionsLength)
      );
      formDataToSend.append(
        "packageWeight",
        Number(formData?.inputData?.packageWeight)
      );
      formDataToSend.append(
        "additionalInformation",
        formData?.inputData?.additionalInformation
      );
      console.log(formDataToSend, "formDataToSend");

      try {
        setLoading(true);
        const res = await axiosInstance.post(
          `${BASE_URL}${ApiEndPoint.SellerAddCatProduct}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res?.status === 200) {
          toast.success(res?.data?.message);
        }

        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setLoading(false);
        console.log(error, "error");
      }
    }
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
                {formData.inputError.productName && (
                  <p className="text-danger">
                    {formData.inputError.productName}{" "}
                  </p>
                )}
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
                {formData.inputError.description && (
                  <p className="text-danger">
                    {formData.inputError.description}{" "}
                  </p>
                )}
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
                {formData.inputError.manufacturerName && (
                  <p className="text-danger">
                    {formData.inputError.manufacturerName}{" "}
                  </p>
                )}
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
                      className="mb-3 me-3"
                      controlId="formBasicLength"
                    >
                      <Form.Control
                        type="text"
                        name="packagingDimensionsLength"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsLength}
                        placeholder="Length"
                      />
                      {formData.inputError.packagingDimensionsLength && (
                        <p className="text-danger">
                          {formData.inputError.packagingDimensionsLength}{" "}
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group
                      className="mb-3 me-3"
                      controlId="formBasicWidth"
                    >
                      <Form.Control
                        type="text"
                        name="packagingDimensionsWidth"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsWidth}
                        placeholder="Width"
                      />
                      {formData.inputError.packagingDimensionsWidth && (
                        <p className="text-danger">
                          {formData.inputError.packagingDimensionsWidth}{" "}
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHeight">
                      <Form.Control
                        type="text"
                        name="packagingDimensionsHeight"
                        onChange={handleInputChange}
                        value={formData.inputData.packagingDimensionsHeight}
                        placeholder="Height"
                      />
                      {formData.inputError.packagingDimensionsHeight && (
                        <p className="text-danger">
                          {formData.inputError.packagingDimensionsHeight}{" "}
                        </p>
                      )}
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
                    {formData.inputError.packageWeight && (
                      <p className="text-danger">
                        {formData.inputError.packageWeight}{" "}
                      </p>
                    )}
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
                type="number"
                name="MRP"
                onChange={handleInputChange}
                value={formData.inputData.MRP}
                className="number-input"
              />
              {formData.inputError.MRP && (
                <p className="text-danger">{formData.inputError.MRP} </p>
              )}
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
                type="number"
                name="sellingPrice"
                onChange={handleInputChange}
                value={formData.inputData.sellingPrice}
                className="number-input"
              />
              {formData.inputError.sellingPrice && (
                <p className="text-danger">
                  {formData.inputError.sellingPrice}{" "}
                </p>
              )}
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
              {formData.inputError.inventory && (
                <p className="text-danger">{formData.inputError.inventory} </p>
              )}
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
              {formData.inputError.materialType && (
                <p className="text-danger">
                  {formData.inputError.materialType}{" "}
                </p>
              )}
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
              {formData.inputError.GSTNumber && (
                <p className="text-danger">{formData.inputError.GSTNumber} </p>
              )}
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>{" "}
              {formData.inputError.HSNCode && (
                <p className="text-danger">{formData.inputError.HSNCode} </p>
              )}
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
              {formData.inputError.searchKeywords && (
                <p className="text-danger">
                  {formData.inputError.searchKeywords}{" "}
                </p>
              )}
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
                  {formData?.inputData?.images_url_One === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData?.inputData?.images_url_One
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

                {formData?.inputError?.images_url_One && (
                  <p className="text-danger">
                    {formData?.inputError?.images_url_One}{" "}
                  </p>
                )}
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
                  {formData?.inputData?.images_url_Two === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData?.inputData?.images_url_Two
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
                {formData?.inputError?.images_url_Two && (
                  <p className="text-danger">
                    {formData?.inputError?.images_url_Two}{" "}
                  </p>
                )}
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
                  {formData?.inputData?.images_url_Three === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData?.inputData?.images_url_Three
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
                {formData?.inputError?.images_url_Three && (
                  <p className="text-danger">
                    {formData?.inputError?.images_url_Three}{" "}
                  </p>
                )}
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
                  {formData?.inputData?.images_url_Four === null ? (
                    <FiPlusSquare
                      size={40}
                      color="rgba(115, 115, 115, 1)
"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(
                        formData?.inputData?.images_url_Four
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
                {formData?.inputError?.images_url_Four && (
                  <p className="text-danger">
                    {formData?.inputError?.images_url_Four}{" "}
                  </p>
                )}
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
