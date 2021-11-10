import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../../../index.css";
import { ButtonCommon } from "../CustomButton/CustomButton";

const Navigation = () => {
  return (
    <div>
      <Navbar className="shadow fw-bold" bg="white" expand="lg">
        <Container>
          <Navbar.Brand className="fs-3 py-1" href="#home">
            <span className="text-cyan">Smart</span>
            <span style={{ color: "#e67e22" }}>Fury</span>
          </Navbar.Brand>
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
              <NavLink
                exact
                activeClassName="text-cyan"
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </Nav>
            <div>
              <Link to="/account/login">
                <ButtonCommon>Login</ButtonCommon>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
