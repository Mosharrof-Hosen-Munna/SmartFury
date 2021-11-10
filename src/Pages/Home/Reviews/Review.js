import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
const Review = (review) => {
  const rating = parseInt(review.rating);
  return (
    <Col className="mt-5 pt-4 mb-lg-0 review">
      <Card className="shadow border-0 review-card h-100 rounded-3">
        <img
          style={{
            top: "-50px",
            left: "38%",
          }}
          className="rounded-circle shadow bg-light border-success border-5 border img-fluid w-25 position-absolute"
          src="https://lh3.googleusercontent.com/a-/AOh14GinVNbm6v4LF654Vi_l9YacCnw8_KV4yJGEfDZr4A=s96-c"
          alt=""
        />
        <Card.Body className="p-3 mt-5  mt-lg-4 pt-5 p-lg-5 position-relative">
          <Card.Text className="text-center">
            remove or edit any Submissions without any notice or legal course
            applicable to us in this regard.
          </Card.Text>
          <div className="text-center">
            <h5 className="fw-bold text-orange">Md Nurul Islam</h5>
            <h6 className="">Traveller</h6>
          </div>
          <div className="text-center">
            {[...Array(4).keys()].map((rate) => (
              <FontAwesomeIcon
                className="fa-1x text-warning me-3"
                icon={faStar}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
