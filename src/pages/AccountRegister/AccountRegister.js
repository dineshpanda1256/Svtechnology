import React, { useEffect, useRef, useState } from "react";
import "./AccountRegister.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import Utilis from "../../utils/Toast";
import { DriverController } from "../../redux/controllers/DriverController";
import { useNavigate } from "react-router-dom";

export default function AccountRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    pincode: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event);
        }
      }

      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    if (!formData.firstName) {
      Utilis.eToast("Enter your first name");
      return false;
    } else if (!formData.lastName) {
      Utilis.eToast("Enter your last name");
      return false;
    } else if (!formData.mobileNumber) {
      Utilis.eToast("Enter your phone number");
      return false;
    } else if (!formData.email) {
      Utilis.eToast("Enter your email");
      return false;
    } else if (!formData.password) {
      Utilis.eToast("Enter your password");
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      Utilis.eToast("Passwords do not match");
      return false;
    } else if (!formData.pincode) {
      Utilis.eToast("Enter your pincode");
      return false;
    } else if (!formData.address) {
      Utilis.eToast("Enter your address");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const res = await DriverController.register({
          firstName: formData.firstName,
          lastName: formData.lastName,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          password: formData.password,
          pincode: formData.pincode,
          address: formData.address,
        });

        // Handle successful registration here
        console.log("Registration successful", res);
        Utilis.sToast("Registration successful");
        navigate("/login");
        setIsLoading(false);
      } catch (err) {
        console.error("error in registration", err);
        Utilis.eToast(err.response.data.result);
        setIsLoading(false);
      }
    }
  };

  useKey("Enter", handleRegister);

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col md="10">
          <div id="mainCol">
            <div className="text-container">
              <span className="gradient-text-register">
                Create a New Account
              </span>
            </div>
          </div>
          <Row>
            <Col md={1}></Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">First Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name *"
                  id="inputField"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Last Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name *"
                  id="inputField"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Phone No. *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone No. *"
                  id="inputField"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  id="inputField"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password *"
                  id="inputField"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Confirm Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password *"
                  id="inputField"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Pincode *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pincode *"
                  id="inputField"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
          </Row>

          <Row>
            <Col md={1}></Col>
            <Col>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Address *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address *"
                  id="inputField"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
          </Row>

          <Row>
            <div id="btnDiv">
              <GlobalButton
                style={{
                  width: "30%",
                  borderRadius: "0.6rem",
                  height: "42px",
                  marginTop: "20px",
                }}
                isLoading={isLoading}
                onClick={handleRegister}
              >
                Register
              </GlobalButton>
            </div>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
