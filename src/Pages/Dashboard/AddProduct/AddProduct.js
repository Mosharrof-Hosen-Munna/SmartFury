import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const AddProduct = () => {
  const [productData, setProductData] = useState("");
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductData(newProductData);
  };
  return (
    <div className="mt-4">
      <h3 className="text-cyan-900 text-center py-3">Add a new Product</h3>
      <Col lg={7} xs={11} md={8} className="mx-auto">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                type="title"
                placeholder="Title"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formPrice">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                name="brand"
                onChange={handleChange}
                placeholder="brand name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="ProductDes">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              name="description"
              onChange={handleChange}
              style={{ height: "100px" }}
              as="textarea"
              placeholder="Product description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="imgUrl">
            <Form.Label>Product Image url</Form.Label>
            <Form.Control
              name="imageUrl"
              onChange={handleChange}
              placeholder="Product Image url"
              required
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" onChange={handleChange} required>
                <option>Select Category</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formPrice">
              <Form.Label>Main Price</Form.Label>
              <Form.Control
                name="mainPrice"
                onChange={handleChange}
                type="number"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formPriceDiscount">
              <Form.Label>Discount Price</Form.Label>
              <Form.Control
                name="discountPrice"
                onChange={handleChange}
                type="number"
                required
              />
            </Form.Group>
          </Row>

          <ButtonCommon className="w-100" type="submit">
            Submit
          </ButtonCommon>
        </Form>
      </Col>
    </div>
  );
};

export default AddProduct;
