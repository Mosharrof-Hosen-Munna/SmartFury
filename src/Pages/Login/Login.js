import React, { useState } from "react";
import {
  Col,
  Container,
  Button,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { ButtonCommon } from "../Shared/CustomButton/CustomButton";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { handleGoogleSignIn, handleEmailPasswordLogin } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      handleEmailPasswordLogin(
        loginData.email,
        loginData.password,
        history,
        location
      );
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <section
        className="py-5 "
        style={{
          minHeight: "500px",
          background:
            "url(https://colorlib.com/etc/lf/Login_v5/images/bg-01.jpg) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="my-4">
            <Col
              lg={5}
              xs={12}
              md={7}
              className="mx-auto bg-white rounded shadow p-4"
            >
              <h3 className="text-cyan text-center mb-4">Login your Account</h3>
              <form onSubmit={handleEmailLogin}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    required
                    placeholder="Email Address"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </FloatingLabel>
                <ButtonCommon type="submit" className="w-100 mt-3">
                  Login
                </ButtonCommon>
              </form>
              <h4 className="text-center  text-secondary"> or</h4>
              <Button
                onClick={() => handleGoogleSignIn(history, location)}
                variant="info"
                className="w-100 text-white fw-bold"
              >
                <FontAwesomeIcon
                  className="fa-1x text-white me-2"
                  icon={faGoogle}
                />
                Google Sign In
              </Button>
              <Link
                to="/account/register"
                className="text-cyan mt-4 d-block text-decoration-none   text-center"
              >
                <p>
                  <span className="text-dark text-decoration-none ">
                    New user?
                  </span>{" "}
                  <span className="text-decoration-underline">
                    Please Register
                  </span>
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Login;
