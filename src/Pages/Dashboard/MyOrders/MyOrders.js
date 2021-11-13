import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "./MyOrder";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/orders/${user.uid}`;
    axios
      .get(url)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  return (
    <div>
      <h3 className="text-cyan m-3">My Orders ({orders?.length})</h3>
      <Col
        xs={11}
        sm={10}
        md={11}
        lg={11}
        xl={10}
        xxl={9}
        className="mx-auto m-0 p-0"
      >
        {orders.length === 0 && (
          <h4 className="text-danger text-center">
            You Have No Order Yet! Please Order Something Special.
          </h4>
        )}
        {orders && (
          <Row md={2} xs={1} className="g-3 m-0 p-0">
            {orders.map((order) => (
              <MyOrder
                order={order}
                update={update}
                setUpdate={setUpdate}
              ></MyOrder>
            ))}
          </Row>
        )}
      </Col>
    </div>
  );
};

export default MyOrders;
