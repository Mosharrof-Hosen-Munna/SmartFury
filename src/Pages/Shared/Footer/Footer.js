import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h1 className="text-center">
        <span className="text-cyan">Smart</span>
        <span style={{ color: "#e67e22" }}>Fury</span>
      </h1>
      <div className="bg-cyan text-white">
        <Container>
          <Row lg={4} md={2} xs={1} className="g-3 mt-3 py-3">
            <Col>
              <h4>
                Got Question? Call us 24/7 <br /> 019566*****
              </h4>
              <p>
                <i>Kishoreganj, Dhaka , Bangladesh</i>
              </p>
              <button className="btn btn-outline-light btn-lg">
                Contact Us
              </button>
            </Col>
            <Col>
              <h3>
                We Using <br /> Safe Payments
              </h3>
              <img
                className="w-50 mt-2"
                src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/palypal-1.png"
                alt=""
              />
              <h4>Secured by:</h4>
              <img
                className="w-50"
                src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/norton_av_logo1.png"
                alt=""
              />
            </Col>
            <Col>
              <h4>Quick Link</h4>
              <ul className="list-group text-decoration-none text-white list-unstyled">
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Support Center
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Term & Conditions
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Shipping
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Our Stores</h4>
              <ul className="list-group text-decoration-none text-white list-unstyled">
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    New York
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    London
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    SF Cockfosters
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    BP Los
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Angeles
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Chicago
                  </Link>
                  <Link
                    to="/home"
                    className="text-decoration-none text-white my-2 d-block"
                  >
                    Las Vegas Albarto
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
