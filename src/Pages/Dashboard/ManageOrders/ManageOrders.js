import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const ManageOrders = () => {
  return (
    <section>
      <h3 className="text-cyan-900 text-center py-3">All Order List</h3>
      <Row>
        <Col className="mx-2">
          <Table responsive striped hover>
            <thead className="bg-cyan text-white">
              <tr>
                <th>#</th>
                <th>Order Name</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Order Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Bangladesh</td>
                <td>Pending</td>
                <td>৳ 5000</td>
                <td className="d-flex align-items-center">
                  <button
                    // onClick={() => handleApproved(order._id)}
                    className="btn btn-sm btn-danger btn-sm fw-bold"
                    // disabled={
                    //   order.status === "Cancelled" ||
                    //   order.status === "Approved"
                  >
                    Cancel
                  </button>
                  <ButtonCommon btnSize="sm">Deleverd</ButtonCommon>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  );
};

export default ManageOrders;
