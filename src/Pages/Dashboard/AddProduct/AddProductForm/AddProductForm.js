import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ButtonCommon } from "../../../Shared/CustomButton/CustomButton";

const AddProductForm = ({
  handleChange,
  handleProductSubmit,
  productError,
}) => {
  return (
    <Col lg={7} xs={11} md={8} className="mx-auto">
      <Form onSubmit={handleProductSubmit}>
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
            {productError.category && (
              <Form.Text id="formName" className="text-danger">
                {productError.category}
              </Form.Text>
            )}
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
            {productError.mainPrice && (
              <Form.Text id="formName" className="text-danger">
                {productError.mainPrice}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formPriceDiscount">
            <Form.Label>Discount Price</Form.Label>
            <Form.Control
              name="discountPrice"
              onChange={handleChange}
              type="number"
              required
            />
            {productError.discountPrice && (
              <Form.Text id="formName" className="text-danger">
                {productError.discountPrice}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <ButtonCommon className="w-100" type="submit">
          Submit
        </ButtonCommon>
      </Form>
    </Col>
  );
};

export default AddProductForm;
