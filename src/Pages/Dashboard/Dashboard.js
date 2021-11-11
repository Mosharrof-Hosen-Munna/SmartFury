import React, { useState } from "react";
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

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { path, url } = useRouteMatch();
  const { user } = useAuth();

  return (
    <>
      <div className="d-flex">
        <DashboardMenu
          handleClose={handleClose}
          asideWidth="100%"
          responsive="d-none d-lg-block"
        >
          <div className="mt-3 fs-2 ms-3 fw-bold ">
            <Link to="/home" className="text-decoration-none">
              <span className="text-cyan">Smart</span>
              <span style={{ color: "#e67e22" }}>Fury</span>
            </Link>
          </div>
        </DashboardMenu>

        <div className="w-100 ">
          <div className="bg-cyan shadow text-white position-fixed w-100 align-items-center d-flex justify-content-between p-2">
            <div>
              <h3 className="d-flex">
                <div className="d-block d-lg-none">
                  <FontAwesomeIcon
                    onClick={handleShow}
                    className="menubars me-3"
                    icon={faBars}
                  />
                </div>
                My Dashboard
              </h3>
            </div>
            <div className="d-flex align-items-center">
              <h4 className="me-3"> {user?.displayName}</h4>
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
          <div style={{ marginBottom: "80px" }}></div>

          {/* Offcanvas  start*/}

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <div className="mt-2 fs-2 ms-2 fw-bold ">
                <Link to="/home" className="text-decoration-none">
                  <span className="text-cyan">Smart</span>
                  <span style={{ color: "#e67e22" }}>Fury</span>
                </Link>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body closeButton>
              <DashboardMenu
                asideWidth="100%"
                width="100%"
                handleClose={handleClose}
              />
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
            <Route path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
