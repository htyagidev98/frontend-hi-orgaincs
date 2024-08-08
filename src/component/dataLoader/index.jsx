import React from "react";
import { Spinner } from "react-bootstrap";
import "./index.css";
const DataLoader = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default DataLoader;
