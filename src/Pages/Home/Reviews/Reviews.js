import React from "react";
import { Container, Row } from "react-bootstrap";
import Review from "./Review";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section className="py-5">
      <Container>
        <h1 className="text-cyan mb-5 section-header position-relative">
          Recent Reviews
        </h1>
        <Row lg={3} md={2} xs={1} className="py-5 g-4">
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
