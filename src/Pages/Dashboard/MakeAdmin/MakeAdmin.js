import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Row, Col, Alert, FloatingLabel } from "react-bootstrap";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  }, [isSuccess]);

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/admin/new/${email}`;
    axios
      .put(url)
      .then((res) => {
        console.log(res.data);
        setIsSuccess(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3 className="text-cyan-900 text-center py-3">Make a new Admin</h3>
      <Col lg={7} xs={11} md={8} className="mx-auto">
        {isSuccess && <Alert variant="success">Make an admin successful</Alert>}
        <Form onSubmit={handleAdminSubmit}>
          <Row className="mb-3">
            <Form.Label>User Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 "
            >
              <Form.Control
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </FloatingLabel>
          </Row>

          <ButtonCommon className="w-100" type="submit">
            Make Admin
          </ButtonCommon>
        </Form>
      </Col>
    </div>
  );
};

export default MakeAdmin;
