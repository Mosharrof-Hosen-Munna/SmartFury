import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyOrder = ({ order, setUpdate, update }) => {
  const [orderProduct, setOrderProduct] = useState({});
  useEffect(() => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/products/${order.productId}`;
    axios
      .get(url)
      .then((res) => setOrderProduct(res.data))
      .catch((err) => console.log(err));
  }, [order]);

  const handleOrderCancel = () => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/order/${order._id}/Cancel`;
    const confirm = window.confirm("Are you sure want to cancel this order");
    if (confirm) {
      axios
        .put(url)
        .then((res) => setUpdate(!update))
        .catch((err) => console.log(err));
    }
  };
  return (
    <Col>
      <div className="shadow bg-white d-flex rounded">
        <img style={{ width: "35%" }} src={orderProduct?.imgUrl} alt="" />
        <div className="p-1">
          <h6 className="order-title">{orderProduct?.title}</h6>
          <div className="d-flex justify-content-between ">
            <div>
              <h6 className="m-0 text-cyan">৳ {orderProduct?.discountPrice}</h6>
              <span
                style={{ fontSize: "14px" }}
                className="text-decoration-line-through text-secondary"
              >
                ৳ {orderProduct?.mainPrice}
              </span>
              <h6 className="m-0 mt-3 text-cyan">Total ৳ {order.totalPrice}</h6>
            </div>
            <div>
              <div style={{ fontSize: "14px" }} className="pe-2 d-block">
                Quantity : {order.quantity}
              </div>
              <div style={{ fontSize: "14px" }} className=" mt-2 d-block">
                {order.orderStatus === "Pending" && (
                  <span className="rounded px-1 mt-2 bg-warning text-white fw-bold">
                    {order.orderStatus}
                  </span>
                )}
                {order.orderStatus === "Cancel" && (
                  <span className="rounded px-1 mt-2 bg-danger text-white fw-bold">
                    {order.orderStatus}
                  </span>
                )}
                {order.orderStatus === "Delivered" && (
                  <span className="rounded px-1 mt-2 bg-success text-white ">
                    {order.orderStatus}
                  </span>
                )}
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  onClick={handleOrderCancel}
                  disabled={
                    order.orderStatus === "Cancel" ||
                    order.orderStatus === "Delivered"
                  }
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default MyOrder;
