import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://safe-plateau-38626.herokuapp.com/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteProduct = (id) => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/product/delete/${id}`;
    const confirm = window.confirm("Are you sure want to delete this product");
    if (confirm) {
      axios
        .delete(url)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(newProducts);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h3 className="text-cyan m-3">Manage all products</h3>
      {products && (
        <Row xs={2} lg={3} md={3} xl={4} className="g-3">
          {products.map((product) => (
            <Col key={product._id}>
              <Card className="h-100 border-0 product-card">
                <Card.Img
                  src={product.imgUrl}
                  variant="top"
                  className="img-fluid w-100 product-img position-relative "
                />
                <span className="bg-cyan px-2 discount text-white py-1 fw-bold">
                  -{product.discountPercent}%
                </span>
                <Card.Body className="p-1 py-2 p-md-2">
                  <Card.Text className="product-desc mb-1 ">
                    {product.title}
                  </Card.Text>
                  <div className="d-block d-flex align-items-center mb-1">
                    <span className="text-cyan me-2 fs-4 product-current-price">
                      ৳ {product.discountPrice}
                    </span>
                    <span className="text-secondary product-discount-price  text-decoration-line-through">
                      ৳ {product.mainPrice}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <ReactStars
                      count={5}
                      value={4}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      className="fs-2 m-0 mx-auto"
                    />
                    <span className="ms-2">(4.5)</span>
                  </div>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn w-100 mt-2 btn-danger "
                  >
                    Delete
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ManageProducts;
