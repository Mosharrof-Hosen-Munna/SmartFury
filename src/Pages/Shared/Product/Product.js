import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
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
            <div className="d-flex align-items-center">
              <ReactStars
                count={5}
                value={4}
                size={24}
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
