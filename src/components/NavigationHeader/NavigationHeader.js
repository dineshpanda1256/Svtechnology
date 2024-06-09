import React from "react";
import "./NavigationHeader.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavigationHeader() {
  const navigate = useNavigate();
  return (
    <Container id="nav-head-container">
      <Row>
        <Col id="nav-head-col">
          <div id="nav-head-div">
            <div id="navigation-div">
              <div id="navigation-text" onClick={() => navigate("/")}>
                Home
              </div>
              <div id="navigation-text" onClick={() => navigate("/services")}>
                Services
              </div>
              <div id="navigation-text" onClick={() => navigate("/contact")}>
                Contactus
              </div>
              <div id="navigation-text" onClick={() => navigate("/about")}>
                About Us
              </div>
            </div>
            <div>
              <Button id="question-btn" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
