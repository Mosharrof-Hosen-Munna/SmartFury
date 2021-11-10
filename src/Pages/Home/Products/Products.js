import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";

const Products = () => {
  return (
    <section className="py-4">
      <Container>
        <h1 className="text-cyan mb-5 section-header position-relative">
          Recent Products
        </h1>
        <Row xs={2} md={3} lg={4} className="g-4 pt-5">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
