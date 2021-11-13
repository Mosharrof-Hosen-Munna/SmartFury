import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import cover1 from "../../../Images/dashboard-cover.jpg";
import cover2 from "../../../Images/dashboard-cover2.jpg";
import Products from "../../Home/Products/Products";

const DashboardHome = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [delivered, setDelivered] = useState(null);
  const [cancel, setCancel] = useState(null);
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/orders/${user.uid}`;
    axios
      .get(url)
      .then((res) => {
        setOrders(res.data);
        const deliveredOrder = res.data.filter(
          (order) => order.orderStatus === "Delivered"
        );
        setDelivered(deliveredOrder.length);
        const cancelOrder = res.data.filter(
          (order) => order.orderStatus === "Cancel"
        );
        setCancel(cancelOrder.length);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <div className="m-3">
        <div className="d-flex justify-content-between align-items-center">
          <div
            style={{ width: "33%" }}
            className="bg-primary text-white rounded-3 p-3"
          >
            <div>
              <h6>My Orders</h6>
            </div>
            <h3>{orders.length}</h3>
          </div>
          <div
            style={{ width: "33%" }}
            className="bg-secondary text-white rounded-3 p-3"
          >
            <div>
              <h6>Order Delivery</h6>
            </div>
            <h3>{delivered}</h3>
          </div>
          <div
            style={{ width: "33%" }}
            className="bg-cyan text-white rounded-3 p-3"
          >
            <div>
              <h6>Cancel Orders</h6>
            </div>
            <h3>{cancel}</h3>
          </div>
        </div>
      </div>

      <Col
        xs={11}
        sm={11}
        md={11}
        lg={11}
        xl={10}
        xxl={10}
        className="mx-auto m-0 p-0"
      >
        <Row>
          <Col lg={6} xs={6}>
            <img className="w-100" src={cover1} alt="" />
          </Col>
          <Col lg={6} xs={6}>
            <img className="w-100" src={cover2} alt="" />
          </Col>
        </Row>
      </Col>
      <Products limit={4}></Products>
    </section>
  );
};

export default DashboardHome;
