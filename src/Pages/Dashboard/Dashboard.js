import React, { useEffect, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";
import AddProduct from "./AddProduct/AddProduct";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import GiveReview from "./GiveReview/GiveReview";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";
import AdminRoute from "./AdminRoute/AdminRoute";
import axios from "axios";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { path, url } = useRouteMatch();
  const { user } = useAuth();

  return (
    <>
      <div className="d-flex justify-content-between">
        <DashboardMenu
          width="25%"
          handleClose={handleClose}
          responsive="d-none d-lg-block"
        >
          <div className="mt-3 fs-2 ms-3 fw-bold ">
            <Link to="/home" className="text-decoration-none">
              <span className="text-cyan">Smart</span>
              <span style={{ color: "#e67e22" }}>Fury</span>
            </Link>
          </div>
        </DashboardMenu>

        <div className="w-100">
          <div className="bg-cyan w-100 text-white align-items-center d-flex justify-content-between p-2">
            <div>
              <h5 className="d-flex">
                <div className="d-block mx-2 d-lg-none">
                  <FontAwesomeIcon
                    onClick={handleShow}
                    className="menubars"
                    icon={faBars}
                  />
                </div>
                My Dashboard
              </h5>
            </div>
            <div className="d-flex align-items-center">
              <h6 className="me-2"> {user?.displayName}</h6>
              <img
                width="50px"
                className="rounded-circle p-1 text-white bg-light "
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                }
                alt=""
              />
            </div>
          </div>

          {/* Offcanvas  start*/}

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton={true}>
              <div className="mt-2 fs-2 ms-2 fw-bold ">
                <Link to="/home" className="text-decoration-none">
                  <span className="text-cyan">Smart</span>
                  <span style={{ color: "#e67e22" }}>Fury</span>
                </Link>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body closeButton>
              <DashboardMenu handleClose={handleClose} />
            </Offcanvas.Body>
          </Offcanvas>
          {/* Offcanvas  end*/}

          <Switch>
            <Route exact path={path}>
              <h3>Dashboard</h3>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/giveReview`}>
              <GiveReview></GiveReview>
            </Route>
            <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
