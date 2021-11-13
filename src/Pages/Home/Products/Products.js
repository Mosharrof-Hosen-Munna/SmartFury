import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import ProductSkeleton from "../../Shared/ProductSkeleton/ProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/api/products/limit/8`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-4">
      <Container>
        <h2 className="text-cyan mb-5 section-header position-relative">
          Recent Products
        </h2>
        {loading ? (
          <Row xs={2} md={3} lg={4} className="g-4 pt-4">
            {[...Array(8).keys()].map((rate) => (
              <ProductSkeleton></ProductSkeleton>
            ))}
          </Row>
        ) : (
          <Row xs={2} md={3} lg={4} className="g-4 pt-4">
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Products;
