import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./ProductDetails.css";
import { ButtonCommon } from "../Shared/CustomButton/CustomButton";
import axios from "axios";
import Product from "../Shared/Product/Product";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // get single product
  useEffect(() => {
    const url = `http://localhost:5000/api/products/${id}`;
    axios
      .get(url)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(product);

  // get related products
  useEffect(() => {
    if (product) {
      const url = `http://localhost:5000/products/related?category=${product?.category}`;
      axios
        .get(url)
        .then((res) => {
          setRelatedProducts(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  // increase quantity
  const increaseQuantity = () => {
    if (orderQuantity < 5) {
      setOrderQuantity(orderQuantity + 1);
    }
  };

  // decrease  Quantity
  const decreaseQuantity = () => {
    if (orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <section className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <img className="w-100 img-fluid" src={product?.imgUrl} alt="" />
            </Col>
            <Col xs={12} md={7}>
              <div className="m-1">
                <h5>{product?.title}</h5>
                <p className="text-secondary">
                  {product?.description?.slice(0, 200)}
                </p>
                <div className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    value={4}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    className="fs-2 mx-auto"
                  />{" "}
                  <span className="ms-2">0 ratings</span>
                </div>
                <div className="d-flex justify-content-between ">
                  <div>
                    <h4 className="mt-3 text-cyan">
                      ৳ {product?.discountPrice}
                    </h4>
                    <span
                      style={{ fontSize: "18px" }}
                      className="text-decoration-line-through text-secondary"
                    >
                      ৳ {product?.mainPrice}
                    </span>{" "}
                    <span className="text-danger">
                      {" "}
                      (-{product?.discountPercent}%)
                    </span>
                  </div>
                  <div>
                    <div className="pe-2 fs-4 d-block fw-bold">
                      In Stock : {product?.quantity}
                    </div>
                  </div>
                </div>
                <div
                  className="btn-group mt-3 text-center w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <ButtonCommon
                    style={{ width: "60px" }}
                    className="fw-bold fs-4"
                    onClick={decreaseQuantity}
                    disabled={orderQuantity === 1}
                  >
                    -
                  </ButtonCommon>
                  <button
                    style={{ width: "60px" }}
                    type="button"
                    disabled
                    className="btn btn-white fs-3 fw-bold"
                  >
                    {orderQuantity}
                  </button>
                  <ButtonCommon
                    onClick={increaseQuantity}
                    style={{ width: "60px" }}
                    className="fw-bold fs-4"
                    disabled={orderQuantity === 5}
                  >
                    +
                  </ButtonCommon>
                </div>
                <Link to={`/order/${product?._id}?quantity=${orderQuantity}`}>
                  <ButtonCommon className="w-100 py-3 mt-3">
                    Buy Now
                  </ButtonCommon>
                </Link>
              </div>
            </Col>
          </Row>
          <p className="my-4">{product?.description}</p>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <h3 className="section-header position-relative mb-4 text-cyan">
            Related Products
          </h3>
          <Row xs={2} md={3} lg={4} className="g-4 pt-4">
            {relatedProducts.map((product) => (
              <Product product={product}></Product>
            ))}
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
