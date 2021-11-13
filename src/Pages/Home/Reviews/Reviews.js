import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "./Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/reviews`;
    axios
      .get(url)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-cyan mb-5 section-header position-relative">
          Recent Reviews
        </h2>
        {reviews && (
          <Row lg={3} md={2} xs={1} className="py-5 g-4">
            {reviews.slice(0, 9).map((review, index) => (
              <Review review={review} index={index}></Review>
            ))}
            -
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Reviews;
