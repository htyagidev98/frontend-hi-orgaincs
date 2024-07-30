import React from "react";
import "./index.css";
import DataTableComponent from "../../../component/dataTableComponent";
import { BsThreeDots } from "react-icons/bs";
import celImage from "../../../assets/tableproduct.png";
const Products = () => {
  const columns = [
    {
      name: "Product",
      width: "350px",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={celImage}
            alt={"productimage"}
            style={{
              width: "40px",
              borderRadius: "50%",
              height: "40px",
              marginRight: "10px",
            }}
          />
          <span
            style={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {" "}
            {row.product}
          </span>
        </div>
      ),
    },
    {
      name: "Categories",
      selector: (row) => row.categories,
    },
    {
      name: "Stock Status",
      selector: (row) => row.status,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Date Added",
      selector: (row) => row.createdAt,
    },
    {
      name: "",
      selector: (row) => <BsThreeDots size={25} />,
    },
  ];

  const data = [
    {
      id: 1,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
    {
      id: 2,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
    {
      id: 3,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
    {
      id: 4,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
    {
      id: 5,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
    {
      id: 6,
      product: "Miracle-Gro All Purpose Plant Food",
      categories: "Fertilizer",
      status: "20",
      price: "1,500",
      createdAt: "10-04-2024",
    },
  ];
  return (
    <div className="produtWrapper">
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ letterSpacing: "1px" }}>Products</h3>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          style={{
            border: "1px solid rgba(217, 217, 217, 1)",
            borderRadius: "100px",
            width: "312px",
            padding: "10px",
          }}
        />
      </div>
      <div className="row pt-3">
        <div className="col-md-4">
          <div className="inner">
            <h5>Total Products</h5>
            <span
              style={{
                fontWeight: "600",
                fontSize: "70px",
                color: "rgba(0, 0, 0, 1)",
                marginTop: "19px",
                display: "block",
              }}
            >
              06
            </span>
          </div>
        </div>

        <div className="col-md-4">
          <div className="inner">
            <h5>Product Categories</h5>
            <div className="row">
              <div className="col-6">
                <div
                  className="d-flex justify-content-between p-2 mt-3"
                  style={{
                    border: "1px solid rgba(217, 217, 217, 1)",
                    borderRadius: "10px",
                  }}
                >
                  <span>Fertilizers</span>
                  <span>01</span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="d-flex justify-content-between  p-2  mt-3"
                  style={{
                    border: "1px solid rgba(217, 217, 217, 1)",
                    borderRadius: "10px",
                  }}
                >
                  <span>Pots & Plants</span>
                  <span>03</span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="d-flex justify-content-between  p-2 mt-3"
                  style={{
                    border: "1px solid rgba(217, 217, 217, 1)",
                    borderRadius: "10px",
                  }}
                >
                  <span>Home Decor</span>
                  <span>01</span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="d-flex justify-content-between p-2 mt-3"
                  style={{
                    border: "1px solid rgba(217, 217, 217, 1)",
                    borderRadius: "10px",
                  }}
                >
                  <span>Grocery</span>
                  <span>01</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="inner">
            <h5>Total Sales</h5>
            <span
              style={{
                fontWeight: "600",
                fontSize: "70px",
                color: "rgba(0, 0, 0, 1)",
                marginTop: "19px",
                display: "block",
              }}
            >
              24
            </span>
          </div>
        </div>
      </div>
      <div
        className="table_data mt-5"
        style={{
          border: "1px solid rgba(217, 217, 217, 1)",
          borderRadius: "10px",
        }}
      >
        <DataTableComponent data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Products;
