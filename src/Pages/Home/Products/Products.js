import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/products/limit/8`;
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-4">
      <Container>
        <h2 className="text-cyan mb-5 section-header position-relative">
          Recent Products
        </h2>
        <Row xs={2} md={3} lg={4} className="g-4 pt-4">
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
