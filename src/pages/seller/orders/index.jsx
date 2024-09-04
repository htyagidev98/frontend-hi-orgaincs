import React, { useState } from "react";
import "./index.css";
import { GoArrowUpRight } from "react-icons/go";
import { BsBorderStyle } from "react-icons/bs";
import { sellerOrderTabsData } from "../../../utils/helper";
import tracone from "../../../assets/tracone.png";
const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Recent Orders");

  const tabHandler = (selectedtabdata) => {
    setSelectedTab(selectedtabdata);
  };
  return (
    <div className="order_wrapper">
      <div className="row">
        <div className="col-md-4">
          <div className="innerdata">
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "18px",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Orders Delivered
              </h4>
              <div
                style={{
                  backgroundColor: "rgba(255, 115, 29, 0.3)",
                  height: "39px",
                  width: "50px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsBorderStyle size={25} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <h4
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                778
              </h4>
              <div
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginTop: "10px",
                }}
              >
                +5.21% <GoArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="innerdata">
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "18px",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Orders Pending{" "}
              </h4>
              <div
                style={{
                  backgroundColor: "rgba(255, 115, 29, 0.3)",
                  height: "39px",
                  width: "50px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsBorderStyle size={25} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <h4
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                8
              </h4>
              <div
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginTop: "10px",
                }}
              >
                +5.21% <GoArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="innerdata">
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "18px",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Orders Returned{" "}
              </h4>
              <div
                style={{
                  backgroundColor: "rgba(255, 115, 29, 0.3)",
                  height: "39px",
                  width: "50px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsBorderStyle size={25} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <h4
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                78
              </h4>
              <div
                style={{
                  color: "rgba(75, 181, 67, 1)",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginTop: "10px",
                }}
              >
                +5.21% <GoArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {sellerOrderTabsData.map((curElm, index) => (
          <div className="col-2" key={index} onClick={() => tabHandler(curElm)}>
            <div
              className={
                selectedTab === curElm
                  ? "border p-2 rounded bg-dark text-center text-white cursor"
                  : "border p-2 rounded cursor text-center"
              }
            >
              {" "}
              {curElm}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 delevereddata">
        <div className="row">
          <div className="col-md-6">
            <div className="inner">
              <div className="d-flex border_bottom justify-content-between align-items-center p-3">
                <div
                  style={{
                    color: "rgba(2, 26, 0, 0.6)",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  #GKS67937
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(190, 255, 193, 0.8)",
                    borderRadius: "8px",
                    width: "111px",
                    color: "rgba(76, 175, 80, 1)",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  Delivered
                </div>
              </div>
              <div className="location_tracker">
                <div className="mt-4 d-flex justify-content-between align-items-center p-3">
                  <div className="left">
                    <div className="d-flex">
                      <div class="tracker-container mt-2">
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                        <div
                          style={{
                            borderLeft: "2px dotted rgba(0, 117, 5, 1)",
                            height: "20px",
                            marginLeft: "8px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                        <div
                          style={{
                            borderLeft: "2px dotted rgba(0, 117, 5, 1)",
                            height: "20px",
                            marginLeft: "8px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                      </div>

                      <div className="ms-3">
                        <div
                          style={{
                            color: "rgba(128, 128, 128, 1)",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          Current location
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          24A, Hyderabad
                        </div>
                        <div className="mt-4">
                          <div
                            style={{
                              color: "rgba(128, 128, 128, 1)",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            Arrival
                          </div>
                          <div
                            style={{
                              color: "rgba(0, 0, 0, 1)",
                              fontSize: "16px",
                              fontWeight: "600",
                            }}
                          >
                            13C, Mumbai
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <img src={tracone} alt="image" />
                  </div>
                </div>
                <div className="border_bottom m-3"></div>
              </div>
              <div className="mt-4 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="first">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Name
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span
                        style={{
                          display: "inline-block",
                          height: "25px",
                          width: "25px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(217, 217, 217, 1)",
                        }}
                      ></span>
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginLeft: "10px",
                        }}
                      >
                        Aryan Kumar
                      </span>
                    </div>
                  </div>
                  <div className="second">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Delivery time
                    </div>
                    <div className="mt-2">
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        5 days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div className="first">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Shipped date
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span
                        style={{
                          display: "inline-block",
                          height: "25px",
                          width: "25px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(217, 217, 217, 1)",
                        }}
                      ></span>
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginLeft: "10px",
                        }}
                      >
                        23/05/2024{" "}
                      </span>
                    </div>
                  </div>
                  <div className="second">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Delivery date{" "}
                    </div>
                    <div className="mt-2">
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        28/05/2024{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(76, 175, 80, 1)",
                    borderRadius: "8px",
                    padding: "10px",
                    color: "rgba(195, 255, 197, 1)",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "30px",
                    cursor: "pointer",
                  }}
                >
                  View Detail
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="inner">
              <div className="d-flex border_bottom justify-content-between align-items-center p-3">
                <div
                  style={{
                    color: "rgba(2, 26, 0, 0.6)",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  #GKS67937
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255, 249, 190, 0.8)",
                    borderRadius: "8px",
                    width: "111px",
                    color: "rgba(167, 152, 20, 1)",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  Pending
                </div>
              </div>
              <div className="location_tracker">
                <div className="mt-4 d-flex justify-content-between align-items-center p-3">
                  <div className="left">
                    <div className="d-flex">
                      <div class="tracker-container mt-2">
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                        <div
                          style={{
                            borderLeft: "2px dotted rgba(0, 117, 5, 1)",
                            height: "20px",
                            marginLeft: "8px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                        <div
                          style={{
                            borderLeft: "2px dotted rgba(0, 117, 5, 1)",
                            height: "20px",
                            marginLeft: "8px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 117, 5, 1)",
                            padding: "3px",
                          }}
                        >
                          <div class="tracker-line"></div>
                        </div>
                      </div>

                      <div className="ms-3">
                        <div
                          style={{
                            color: "rgba(128, 128, 128, 1)",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          Current location
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          24A, Hyderabad
                        </div>
                        <div className="mt-4">
                          <div
                            style={{
                              color: "rgba(128, 128, 128, 1)",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            Arrival
                          </div>
                          <div
                            style={{
                              color: "rgba(0, 0, 0, 1)",
                              fontSize: "16px",
                              fontWeight: "600",
                            }}
                          >
                            13C, Mumbai
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <img src={tracone} alt="image" />
                  </div>
                </div>
                <div className="border_bottom m-3"></div>
              </div>
              <div className="mt-4 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="first">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Name
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span
                        style={{
                          display: "inline-block",
                          height: "25px",
                          width: "25px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(217, 217, 217, 1)",
                        }}
                      ></span>
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginLeft: "10px",
                        }}
                      >
                        Aryan Kumar
                      </span>
                    </div>
                  </div>
                  <div className="second">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Delivery time
                    </div>
                    <div className="mt-2">
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        5 days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div className="first">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Shipped date
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span
                        style={{
                          display: "inline-block",
                          height: "25px",
                          width: "25px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(217, 217, 217, 1)",
                        }}
                      ></span>
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginLeft: "10px",
                        }}
                      >
                        23/05/2024{" "}
                      </span>
                    </div>
                  </div>
                  <div className="second">
                    <div
                      style={{
                        color: "rgba(128, 128, 128, 1)",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Delivery date{" "}
                    </div>
                    <div className="mt-2">
                      <span
                        style={{
                          color: "rgba(0, 0, 0, 1)",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        28/05/2024{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(76, 175, 80, 1)",
                    borderRadius: "8px",
                    padding: "10px",
                    color: "rgba(195, 255, 197, 1)",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "30px",
                    cursor: "pointer",
                  }}
                >
                  View Detail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
