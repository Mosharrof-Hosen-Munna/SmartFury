import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./Review.css";
const Review = ({ review, index }) => {
  const { feedbackMessage, rating } = review;
  const { photoUrl, name } = review.profile;
  console.log(review.profile);
  return (
    <Col className="mt-5 pt-4 mb-lg-0 review">
      <Card
        className={`shadow border-0 review-card h-100 ${
          index % 2 === 1 && "review-card-active"
        } rounded-3`}
      >
        <img
          style={{
            top: "-50px",
            left: "38%",
          }}
          className="rounded-circle shadow bg-light border-success border-5 border img-fluid w-25 position-absolute"
          src={
            photoUrl
              ? photoUrl
              : "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
          }
          alt=""
        />
        <Card.Body className="p-3 mt-5  mt-lg-4 pt-5 p-md-3 pt-lg-5 px-lg-4 position-relative">
          <Card.Text className="text-center review-message ">
            {feedbackMessage}
          </Card.Text>
          <div className="text-center">
            <h5 className="fw-bold text-orange">{name}</h5>
            <h6 className="">User</h6>
          </div>
          <div className="text-center d-flex justify-content-center">
            <ReactStars
              count={5}
              value={rating}
              size={32}
              edit={false}
              activeColor="#ffd700"
              className="fs-2 mx-auto"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
