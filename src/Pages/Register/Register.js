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

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [validationError, setValidationError] = useState({});

  const { handleGoogleSignIn, handleEmailPasswordRegister } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const validationRegister = (name, password) => {
    const errorMessage = {};
    if (name.length < 5 || name.length > 15) {
      errorMessage.name = "Name Must be between 5 to 15 characters";
    }
    if (password.length < 6 || password.length > 14) {
      errorMessage.password = "Password Must be between 6 to 14 characters";
    }
    return errorMessage;
  };

  const handleEmailRegister = (e) => {
    e.preventDefault();
    const errorMessage = validationRegister(
      registerData?.name,
      registerData?.password
    );
    if (errorMessage.name || errorMessage.password) {
      setValidationError(errorMessage);
      return;
    }
    handleEmailPasswordRegister(
      registerData?.email,
      registerData?.password,
      registerData?.name,
      history,
      location
    );
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
              <h3 className="text-cyan text-center mb-4">
                Register your Account
              </h3>
              <form onSubmit={handleEmailRegister}>
                <FloatingLabel
                  controlId="floatingName"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control
                    name="name"
                    type="name"
                    onChange={handleOnChange}
                    placeholder="Your Name"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    placeholder="Email Address"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
                <ButtonCommon type="submit" className="w-100 mt-3">
                  Register
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
                to="/account/login"
                className="text-cyan mt-4 d-block text-decoration-none  text-center"
              >
                <p>
                  <span className="text-dark text-decoration-none ">
                    Already have an account?
                  </span>{" "}
                  <span className="text-decoration-underline">
                    Please Login
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

export default Register;
