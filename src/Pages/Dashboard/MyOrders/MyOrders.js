import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyOrders.css";

const MyOrders = () => {
  return (
    <div>
      <h3 className="text-cyan m-3">My Orders (5)</h3>
      <Col
        xs={11}
        sm={10}
        md={11}
        lg={11}
        xl={10}
        xxl={9}
        className="mx-auto m-0 p-0"
      >
        <Row md={2} xs={1} className="g-3 m-0 p-0">
          <Col>
            <Link
              className="text-decoration-none text-dark"
              to="/dashboard/myOrders"
            >
              <div className="shadow bg-white d-flex rounded">
                <img
                  style={{ width: "35%" }}
                  src="https://static-01.daraz.com.bd/p/mdc/77ffa1c0d4b5699d3fb000a555a41d5a.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h6 className="order-title">
                    Xiaomi Haylou Smart Watch LS02 For Man Women Watches For
                    Android iOS Global Version
                  </h6>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6 className="m-0 text-cyan">৳ 2500</h6>
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-decoration-line-through text-secondary"
                      >
                        ৳ 3000
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-2 d-block"
                      >
                        Quantity : 2
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-1 d-block"
                      >
                        <span className="rounded px-1 bg-warning text-white fw-bold">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link
              className="text-decoration-none text-dark"
              to="/dashboard/myOrders"
            >
              <div className="shadow bg-white d-flex rounded">
                <img
                  style={{ width: "35%" }}
                  src="https://static-01.daraz.com.bd/p/mdc/77ffa1c0d4b5699d3fb000a555a41d5a.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h6 className="order-title">
                    Xiaomi Haylou Smart Watch LS02 For Man Women Watches For
                    Android iOS Global Version
                  </h6>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6 className="m-0 text-cyan">৳ 2500</h6>
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-decoration-line-through text-secondary"
                      >
                        ৳ 3000
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-2 d-block"
                      >
                        Quantity : 2
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-1 d-block"
                      >
                        <span className="rounded px-1 bg-warning text-white fw-bold">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link
              className="text-decoration-none text-dark"
              to="/dashboard/myOrders"
            >
              <div className="shadow bg-white d-flex rounded">
                <img
                  style={{ width: "35%" }}
                  src="https://static-01.daraz.com.bd/p/mdc/77ffa1c0d4b5699d3fb000a555a41d5a.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h6 className="order-title">
                    Xiaomi Haylou Smart Watch LS02 For Man Women Watches For
                    Android iOS Global Version
                  </h6>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6 className="m-0 text-cyan">৳ 2500</h6>
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-decoration-line-through text-secondary"
                      >
                        ৳ 3000
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-2 d-block"
                      >
                        Quantity : 2
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-1 d-block"
                      >
                        <span className="rounded px-1 bg-warning text-white fw-bold">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link
              className="text-decoration-none text-dark"
              to="/dashboard/myOrders"
            >
              <div className="shadow bg-white d-flex rounded">
                <img
                  style={{ width: "35%" }}
                  src="https://static-01.daraz.com.bd/p/mdc/77ffa1c0d4b5699d3fb000a555a41d5a.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h6 className="order-title">
                    Xiaomi Haylou Smart Watch LS02 For Man Women Watches For
                    Android iOS Global Version
                  </h6>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6 className="m-0 text-cyan">৳ 2500</h6>
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-decoration-line-through text-secondary"
                      >
                        ৳ 3000
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-2 d-block"
                      >
                        Quantity : 2
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-1 d-block"
                      >
                        <span className="rounded px-1 bg-warning text-white fw-bold">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link
              className="text-decoration-none text-dark"
              to="/dashboard/myOrders"
            >
              <div className="shadow bg-white d-flex rounded">
                <img
                  style={{ width: "35%" }}
                  src="https://static-01.daraz.com.bd/p/mdc/77ffa1c0d4b5699d3fb000a555a41d5a.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h6 className="order-title">
                    Xiaomi Haylou Smart Watch LS02 For Man Women Watches For
                    Android iOS Global Version
                  </h6>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6 className="m-0 text-cyan">৳ 2500</h6>
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-decoration-line-through text-secondary"
                      >
                        ৳ 3000
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-2 d-block"
                      >
                        Quantity : 2
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="pe-1 d-block"
                      >
                        <span className="rounded px-1 bg-warning text-white fw-bold">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default MyOrders;
