import React, { useEffect, useRef, useState } from "react";
import "./AccountLogin.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import Utilis from "../../utils/Toast";
import { useNavigate } from "react-router-dom";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import { DriverController } from "../../redux/controllers/DriverController";

export default function AccountLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValid = () => {
    if (!validateEmail(email)) {
      Utilis.eToast("Please enter a valid email");
      return false;
    } else if (password.length < 4) {
      Utilis.eToast("Please enter a valid password");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (!isValid()) return;
    setIsLoading(true);
    try {
      const res = await DriverController.login({
        email,
        password,
      });
      Utilis.sToast(`Welcome ${res?.data?.result?.firstName || ""}`);
      setIsLoading(false);
    } catch (err) {
      console.error("error in login", err);
      Utilis.eToast(err.response.data.result);
      setIsLoading(false);
    }
  };

  useKey("Enter", handleLogin);

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col md={10} xs={10}>
          <div id="mainCol">
            <div className="text-container">
              <span className="gradient-text">Login To Your Account</span>
            </div>
          </div>
          <Row>
            <Col></Col>
            <Col xs={10} md={4}>
              <Form.Group className="mb-3 mt-4">
                <Form.Label id="inputFieldLabel">Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name123@example.com"
                  id="inputField"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label id="inputFieldLabel">Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  id="inputField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div id="mainCol">
                <GlobalButton
                  style={{
                    width: "50%",
                    borderRadius: "0.6rem",
                    height: "42px",
                    marginTop: "20px",
                  }}
                  isLoading={isLoading}
                  onClick={handleLogin}
                >
                  Login
                </GlobalButton>
              </div>

              <div id="singUpTextDiv">
                <div>
                  I do not have an account?{" "}
                  <span
                    id="singUpText"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Signup
                  </span>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
