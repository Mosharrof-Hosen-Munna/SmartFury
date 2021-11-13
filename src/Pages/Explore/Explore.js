import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Product from "../Shared/Product/Product";
import ProductSkeleton from "../Shared/ProductSkeleton/ProductSkeleton";

const Explore = () => {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeCategory = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const url = `http://localhost:5000/api/products?filter=${filter}`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filter]);

  return (
    <>
      <Navigation></Navigation>
      <section className="py-4">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <h4>Product Categories</h4>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  value=""
                  onChange={changeCategory}
                  id="Default"
                  checked={filter === ""}
                />
                <label class="form-check-label" for="Default">
                  All
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  value="large"
                  id="large"
                  onChange={changeCategory}
                  checked={filter === "large"}
                />
                <label class="form-check-label" for="large">
                  Large
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  value="medium"
                  id="medium"
                  onChange={changeCategory}
                  checked={filter === "medium"}
                />
                <label class="form-check-label" for="medium">
                  Medium
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  value="small"
                  id="small"
                  onChange={changeCategory}
                  checked={filter === "small"}
                />
                <label class="form-check-label" for="small">
                  Small
                </label>
              </div>
            </Col>
            <Col xs={12} md={9}>
              <h2 className="section-header position-relative text-cyan">
                TRENDING PRODUCTS
              </h2>
              {loading ? (
                <Row xs={2} md={3} lg={3} xxl={4} className="g-4 pt-4">
                  {[...Array(9).keys()].map((rate) => (
                    <ProductSkeleton></ProductSkeleton>
                  ))}
                </Row>
              ) : (
                <Row xs={2} md={3} lg={3} xxl={4} className="g-4 pt-4">
                  {products.map((product) => (
                    <Product product={product}></Product>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Explore;
