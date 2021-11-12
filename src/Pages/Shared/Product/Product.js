import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const {
    _id,
    imgUrl,
    description,
    discountPrice,
    mainPrice,
    discountPercent,
    ratings,
  } = product;

  console.log(product);

  return (
    <Col>
      <Link to={`/product/${_id}`} className="text-decoration-none text-dark">
        <Card className="h-100 border-0 product-card">
          <Card.Img
            src={imgUrl}
            variant="top"
            className="img-fluid w-100 product-img position-relative "
          />
          <span className="bg-cyan px-2 discount text-white py-1 fw-bold">
            -{discountPercent}%
          </span>
          <Card.Body className="p-1 py-2 p-md-2">
            <Card.Text className="product-desc mb-1 ">{description}</Card.Text>
            <div className="d-block d-flex align-items-center mb-1">
              <span className="text-cyan me-2 fs-5 product-current-price">
                ৳ {discountPrice}
                {"  "}
              </span>
              <span className="text-secondary product-discount-price  text-decoration-line-through">
                ৳ {mainPrice}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <ReactStars
                count={5}
                value={4}
                size={20}
                edit={false}
                activeColor="#ffd700"
                className="fs-2 m-0 mx-auto"
              />
              <span className="ms-2">(4.5)</span>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
