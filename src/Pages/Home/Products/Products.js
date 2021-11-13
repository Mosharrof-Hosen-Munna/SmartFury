import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../../Shared/Product/Product";
import ProductSkeleton from "../../Shared/ProductSkeleton/ProductSkeleton";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://safe-plateau-38626.herokuapp.com/api/products/limit/8`;
    if (limit) {
      url = `https://safe-plateau-38626.herokuapp.com/api/products/limit/${limit}`;
    }
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
          <Row xs={2} md={3} lg={4} className="g-3 g-lg-4 pt-4">
            {[...Array(8).keys()].map((rate) => (
              <ProductSkeleton></ProductSkeleton>
            ))}
          </Row>
        ) : (
          <Row xs={2} md={3} lg={4} className="g-3 g-lg-4 pt-4">
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
          </Row>
        )}
        <div className="text-end mt-4 fs-3">
          <Link className="text-cyan" to="/explore">
            See more products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Products;
