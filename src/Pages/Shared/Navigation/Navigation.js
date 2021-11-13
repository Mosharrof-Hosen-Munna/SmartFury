import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "../../../index.css";
import { ButtonCommon } from "../CustomButton/CustomButton";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="shadow fw-bold" bg="white" expand="lg">
        <Container>
          <Link to="/home" className="fs-3 text-decoration-none py-1">
            <span className="text-cyan">Smart</span>
            <span style={{ color: "#e67e22" }}>Fury</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                exact
                activeClassName="text-cyan"
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="text-cyan"
                className="nav-link"
                to="/explore"
              >
                Explore
              </NavLink>
              {user && (
                <NavLink
                  exact
                  activeClassName="text-cyan"
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </Nav>
            <div className="me-2">{user?.displayName}</div>
            <div>
              {user ? (
                <Button onClick={logOut} variant="danger">
                  Logout
                </Button>
              ) : (
                <Link to="/account/login">
                  <ButtonCommon>Login</ButtonCommon>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
