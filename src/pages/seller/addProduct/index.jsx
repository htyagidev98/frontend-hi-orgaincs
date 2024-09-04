import React from "react";
import image1 from "../../../assets/ract1.png";
import image2 from "../../../assets/ract2.png";
import image3 from "../../../assets/ract3.png";
import image4 from "../../../assets/ract4.png";
import useGetData from "../../../customHooks/useGetData";
import ApiEndPoint from "../../../utils/apiEnpPoint";
import DataLoader from "../../../component/dataLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";
const AddProduct = () => {
  const { loading, responseData } = useGetData(ApiEndPoint.SellerCategoryList);
  const navigate = useNavigate();

  const getLicenceStatus = async (selectedId) => {
    try {
      const res = await axiosInstance.get(
        `${ApiEndPoint.SellerLicenceCheck}${selectedId}`
      );
      if (res?.data?.data.isLicense === "processing") {
        toast.error(res?.data?.message);
      } else if (!res?.data?.data?.isLicense) {
        navigate("/seller/licenseentry", {
          state: {
            main: res.data?.data?.category_id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const categoryNavigateHandler = (selectedCategory) => {
    if (!selectedCategory.license) {
      navigate("/seller/addproductdetails");
    } else {
      getLicenceStatus(selectedCategory?._id);
    }
  };
  if (loading) {
    return <DataLoader />;
  }
  return (
    <div className="addproductWrapper vh-100">
      <h3 style={{ letterSpacing: "1px" }}>Categories</h3>
      <div className="row pt-4">
        {responseData?.data &&
          responseData?.data?.map((curElm) => (
            <div className="col-md-3" key={curElm?._id}>
              <div
                className="cursor position-relative"
                onClick={() => categoryNavigateHandler(curElm)}
              >
                <img
                  src={
                    curElm?.category_name === "fertilizers"
                      ? image1
                      : curElm?.category_name === "homeDecor"
                      ? image2
                      : curElm?.category_name === "grocerry"
                      ? image3
                      : curElm?.category_name === "pots_plats"
                      ? image4
                      : ""
                  }
                  alt="ractone"
                  className="img-fluid"
                />
                <h5
                  className="text-white fw-bold text-capitalize"
                  style={{ position: "absolute", bottom: "10px", left: "50px" }}
                >
                  {curElm?.category_name === "pots_plats"
                    ? "Pots Plants"
                    : curElm?.category_name}
                </h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddProduct;
