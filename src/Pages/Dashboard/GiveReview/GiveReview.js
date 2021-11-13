import axios from "axios";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../Hooks/useAuth";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const GiveReview = () => {
  const [rating, setRating] = useState(4);
  const [reviewMessage, setReviewMessage] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const { user } = useAuth();

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      rating,
      feedbackMessage: reviewMessage,
      profile: {
        photoUrl: user.photoURL,
        email: user.email,
        name: user.displayName,
      },
      uid: user.uid,
    };
    const url = `http://localhost:5000/api/reviews/createReview`;
    axios
      .post(url, reviewData)
      .then((res) => {
        console.log(res.data);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4 className="text-cyan-900 text-center py-3">
        Share your experience give a review
      </h4>
      <Col lg={7} xs={11} md={8} className="mx-auto">
        <Form onSubmit={handleReviewSubmit}>
          <h3>Select your rates</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            value={rating}
            size={60}
            activeColor="#ffd700"
            className="fs-2 mx-auto"
          />
          <Form.Group className="mb-3" controlId="ProductDes">
            <Form.Label>Feed back message</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => setReviewMessage(e.target.value)}
              style={{ height: "100px" }}
              as="textarea"
              placeholder="Don't be shy, tell us more!"
              required
            />
          </Form.Group>
          <ButtonCommon type="submit" className="w-100">
            Share Review
          </ButtonCommon>
        </Form>
      </Col>
    </div>
  );
};

export default GiveReview;
