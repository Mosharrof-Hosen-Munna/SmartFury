import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { ButtonCommon } from "../CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <Col>
      <Link to="/products/" className="text-decoration-none text-dark">
        <Card className="h-100 border-0 product-card">
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            className="img-fluid product-img position-relative px-4"
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/banner_img2-min.png"
          />
          <span className="bg-cyan px-2 discount text-white py-1 fw-bold">
            -25%
          </span>
          <Card.Body>
            <Card.Title className="product-title">Relogio Faminino</Card.Title>
            <Card.Text className="product-desc mb-1  text-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-block mb-1">
              <span className="text-cyan product-current-price">৳ 18000 </span>
              <span className="text-secondary product-discount-price  text-decoration-line-through">
                ৳ 22000
              </span>
            </div>
            {[...Array(4).keys()].map((rate) => (
              <FontAwesomeIcon className="text-warning me-1" icon={faStar} />
            ))}
            <span>(4.5)</span>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
