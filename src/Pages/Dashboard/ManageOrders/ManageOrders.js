import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/orders/all`;
    axios
      .get(url)
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  const handleOrderCancel = (id) => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/order/${id}/Cancel`;
    axios
      .put(url)
      .then((res) => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handleOrderDelivered = (id) => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/order/${id}/Delivered`;
    axios
      .put(url)
      .then((res) => setUpdate(!update))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <h3 className="text-cyan-900 text-center py-3">
        All Orders List ({allOrders.length})
      </h3>

      <Col className="mx-2">
        <Table responsive striped hover>
          <thead className="bg-cyan text-white">
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Order Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{order.userName.split(" ")[0]}</td>
                <td>{order.address.phone}</td>
                <td>{order.address.city}</td>
                <td>
                  {order.orderStatus === "Pending" && (
                    <span className="rounded px-1 mt-2 bg-warning text-white ">
                      {order.orderStatus}
                    </span>
                  )}
                  {order.orderStatus === "Delivered" && (
                    <span className="rounded px-1 mt-2 bg-success text-white ">
                      {order.orderStatus}
                    </span>
                  )}
                  {order.orderStatus === "Cancel" && (
                    <span className="rounded px-1 mt-2 bg-danger text-white">
                      {order.orderStatus}
                    </span>
                  )}
                </td>
                <td>৳ {order.totalPrice}</td>
                <td className="d-flex align-items-center">
                  <button
                    // onClick={() => handleApproved(order._id)}
                    className="btn btn-sm btn-danger btn-sm fw-bold"
                    onClick={() => handleOrderCancel(order._id)}
                    disabled={
                      order.orderStatus === "Cancel" ||
                      order.orderStatus === "Delivered"
                    }
                  >
                    Cancel
                  </button>
                  <ButtonCommon
                    onClick={() => handleOrderDelivered(order._id)}
                    disabled={
                      order.orderStatus === "Cancel" ||
                      order.orderStatus === "Delivered"
                    }
                    btnSize="sm"
                  >
                    Deleverd
                  </ButtonCommon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </section>
  );
};

export default ManageOrders;
