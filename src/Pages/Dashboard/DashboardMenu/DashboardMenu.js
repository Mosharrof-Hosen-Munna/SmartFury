import React from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import "./DashboardMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHome,
  faMoneyCheckAlt,
  faLuggageCart,
  faBookReader,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../Hooks/useAuth";
const DashboardMenu = ({ responsive, width, children, handleClose }) => {
  let { path, url } = useRouteMatch();
  const { logOut, databaseUser } = useAuth();
  return (
    <div
      style={{ width: `${width}` }}
      className={`vh-100 bg-white dashboard-aside   ${responsive}`}
    >
      {children}
      <ul className="aside-bar-menu p-0  mt-3">
        {/* {!databaseUser?.role && (
          <> */}
        <li>
          <NavLink
            onClick={handleClose}
            className="d-flex align-items-center"
            activeClassName="aside-item-active"
            exact
            to={`${url}`}
          >
            <div style={{ width: "40px" }}>
              <FontAwesomeIcon className=" me-2" icon={faHome} />
            </div>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            activeClassName="aside-item-active"
            className="d-flex align-items-center"
            exact
            to={`${url}/myOrders`}
          >
            <div style={{ width: "40px" }}>
              <FontAwesomeIcon className=" me-2" icon={faLuggageCart} />
            </div>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            className="d-flex align-items-center"
            activeClassName="aside-item-active"
            exact
            to={`${url}/payment`}
          >
            <div style={{ width: "40px" }}>
              <FontAwesomeIcon className="me-2" icon={faMoneyCheckAlt} />
            </div>
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            className="d-flex align-items-center"
            activeClassName="aside-item-active"
            exact
            to={`${url}/giveReview`}
          >
            <div style={{ width: "40px" }}>
              <FontAwesomeIcon className=" me-2" icon={faBookReader} />{" "}
            </div>
            Give Review
          </NavLink>
        </li>
        {/* </>
        )} */}
        {databaseUser?.role === "admin" && (
          <>
            <li>
              <NavLink
                onClick={handleClose}
                className="d-flex align-items-center"
                activeClassName="aside-item-active"
                exact
                to={`${url}/manageOrders`}
              >
                <div style={{ width: "40px" }}>
                  <FontAwesomeIcon className=" me-2" icon={faLuggageCart} />
                </div>
                Manage Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                className="d-flex align-items-center"
                activeClassName="aside-item-active"
                exact
                to={`${url}/addProduct`}
              >
                <div style={{ width: "40px" }}>
                  <FontAwesomeIcon className=" me-2" icon={faPlus} />
                </div>
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                className="d-flex align-items-center"
                activeClassName="aside-item-active"
                exact
                to={`${url}/makeAdmin`}
              >
                <div style={{ width: "40px" }}>
                  <FontAwesomeIcon className=" me-2" icon={faUserPlus} />{" "}
                </div>
                Make Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                className="d-flex align-items-center"
                activeClassName="aside-item-active"
                exact
                to={`${url}/manageProducts`}
              >
                <div style={{ width: "40px" }}>
                  <FontAwesomeIcon className=" me-2" icon={faBookReader} />
                </div>
                Manage Products
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div
        onClick={logOut}
        className="position-absolute d-flex align-items-center dashboard-logout mb-3 ms-3 fw-bold fs-5 bottom-0"
      >
        <FontAwesomeIcon className=" text-success me-2" icon={faSignOutAlt} />
        Log out
      </div>
    </div>
  );
};

export default DashboardMenu;
