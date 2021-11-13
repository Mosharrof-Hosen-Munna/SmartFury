import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Button,
  FormControl,
} from "react-bootstrap";
import { useParams, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ButtonCommon } from "../Shared/CustomButton/CustomButton";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const PlaceOrder = () => {
  const [orderProduct, setOrderProduct] = useState({});
  const [address, setAddress] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [databaseUser, setDatabaseUser] = useState({});
  const [hasAddress, setHasAddress] = useState(false);
  const { productID } = useParams();
  const search = useLocation().search;
  const quantity = new URLSearchParams(search).get("quantity");
  const { user } = useAuth();

  // calculate product price
  const subTotal = orderProduct?.discountPrice * quantity;
  const shippingFee = 60;
  const Total = subTotal + shippingFee;

  // load single product by id
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/products/${productID}`;
    axios
      .get(url)
      .then((res) => setOrderProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  // load user data from database
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/users/${user.uid}`;
    axios
      .get(url)
      .then((res) => {
        setDatabaseUser(res.data);
        console.log(res.data);
        if (res.data.address) {
          setIsEdit(false);
          setAddress(res.data.address);
        } else {
          setIsEdit(true);
        }
      })
      .catch((err) => console.log(err));
  }, [hasAddress]);

  const history = useHistory();

  const handlePlaceOrder = () => {
    if (!databaseUser?.address) {
      alert("Please add shipping addresss");
      return;
    } else {
      const orderedData = {
        uid: user.uid,
        email: user.email,
        userName: user.displayName,
        address: address,
        productId: productID,
        orderId: Math.ceil(Math.random() * 6431316763136431),
        quantity: quantity,
        totalPrice: Total,
        orderStatus: "Pending",
      };
      const URL = `https://safe-plateau-38626.herokuapp.com/api/orders/createOrder`;
      axios
        .post(URL, orderedData)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Your Order Placed Successful! Continue Shopping!");
            history.push("/home");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAddress = { ...address };
    newAddress[field] = value;
    setAddress(newAddress);
  };

  const handleEditToggle = () => setIsEdit(true);

  const saveAddressDatabase = (e) => {
    e.preventDefault();
    const url = `https://safe-plateau-38626.herokuapp.com/api/user/newAddress/${user.uid}`;
    if (
      address.country &&
      address.city &&
      address.paymentMethod &&
      address.phone &&
      address.upozila
    ) {
      axios
        .put(url, address)
        .then((res) => {
          setIsEdit(false);
          if (res.data.modifiedCount) {
            setHasAddress(true);
            setIsEdit(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill all address box");
    }
  };

  return (
    <>
      <Navigation />
      <section style={{ minHeight: "80vh" }} className="py-5">
        <Container>
          <Row className="g-4">
            <Col xs={12} md={7} lg={7}>
              <Row className="shadow bg-white d-flex rounded">
                <Col xs={12} md={4} lg={5}>
                  <img className="w-100" src={orderProduct?.imgUrl} alt="" />
                </Col>
                <Col xs={12} md={8} lg={7}>
                  <div className="p-1">
                    <h6 className="order-title">{orderProduct?.title}</h6>
                    <p className="text-secondary " style={{ fontSize: "14px" }}>
                      {orderProduct?.description?.slice(0, 160)}
                    </p>
                    <div className="d-flex justify-content-between ">
                      <div className="m-3">
                        <h4 className="m-0 text-cyan">
                          ৳ {orderProduct?.discountPrice}
                        </h4>
                        <span
                          style={{ fontSize: "14px" }}
                          className="text-decoration-line-through text-secondary"
                        >
                          ৳ {orderProduct?.mainPrice}
                        </span>
                        <span className="text-danger text-decoration-none ms-2">
                          -({orderProduct?.discountPercent})%
                        </span>
                      </div>
                      <div>
                        <div className="pe-2 fs-5 d-block">
                          Quantity :{" "}
                          <span className="text-cyan-900 fw-bold">
                            {" "}
                            {quantity}
                          </span>
                        </div>
                        <div className="mt-2 fw-bold">
                          Stock: ({orderProduct?.quantity})
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={5} lg={5}>
              <h4 className="text-cyan-900 my-2 text-center">
                Shipping and Billing
              </h4>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="my-2">Address:</h5>
                {isEdit ? (
                  <ButtonCommon onClick={saveAddressDatabase} btnSize="sm">
                    Save
                  </ButtonCommon>
                ) : (
                  <ButtonCommon
                    onClick={handleEditToggle}
                    type="button"
                    className="bg-warning"
                    btnSize="sm"
                  >
                    Edit
                  </ButtonCommon>
                )}
              </div>

              <Row className="mb-2">
                <Form.Group as={Col} className="mb-2" controlId="country">
                  <Form.Label>Country *</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={address?.country}
                    disabled={!isEdit}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="city"
                    placeholder="City"
                    value={address?.city}
                    disabled={!isEdit}
                    required
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-2" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    value={address?.phone}
                    disabled={!isEdit}
                    placeholder="Phone Number"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    onChange={handleChange}
                    name="paymentMethod"
                    value={address?.paymentMethod}
                    disabled={!isEdit}
                    required
                  >
                    <option>Select Method</option>
                    <option value="COD">Cash On Delivery</option>
                    <option value="masterCard">Master Card</option>
                    <option value="bkash">Bkash</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-2" controlId="upozila">
                <Form.Label>Upozila</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="upozila"
                  value={address?.upozila}
                  placeholder="Upozila name"
                  disabled={!isEdit}
                  required
                />
              </Form.Group>
              <div>
                <h6 className="d-flex justify-content-between align-items-center">
                  <span className="text-secondary">Sub Total:</span>{" "}
                  <span>
                    <span className="fs-3 m-0 p-0">৳</span>
                    {subTotal}
                  </span>
                </h6>
              </div>
              <div>
                <h6 className="d-flex m-0 p-0 justify-content-between align-items-center">
                  <span className="text-secondary">Shipping Fee:</span>{" "}
                  <span>
                    <span className="fs-3 m-0 p-0">৳</span>
                    {shippingFee}
                  </span>
                </h6>
              </div>
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Enter voucher Code"
                  aria-label="Recipient's username"
                  aria-describedby="voucher"
                />
                <Button
                  className="text-white fw-bold"
                  variant="warning"
                  id="voucher"
                >
                  Apply
                </Button>
              </InputGroup>
              <div>
                <h6 className="d-flex m-0 mb-2 p-0 justify-content-between align-items-center">
                  <span className=" fw-bold">Total :</span>{" "}
                  <span>
                    <span className="fs-3 m-0 p-0">৳</span>
                    {Total}
                  </span>
                </h6>
              </div>
              <div className="text-center">
                <ButtonCommon
                  onClick={handlePlaceOrder}
                  className="w-100 mx-auto"
                  type="submit"
                >
                  Place Order
                </ButtonCommon>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PlaceOrder;
