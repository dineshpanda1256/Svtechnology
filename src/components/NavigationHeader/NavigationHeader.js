import React from "react";
import "./NavigationHeader.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function NavigationHeader() {
  return (
    <Container id="nav-head-container">
      <Row>
        <Col id="nav-head-col">
          <div id="nav-head-div">
            <div id="navigation-div">
              <div id="navigation-text">Home</div>
              <div id="navigation-text">Services</div>
              <div id="navigation-text">Contactus</div>
              <div id="navigation-text">About Us</div>
            </div>
            <div>
              <Button id="question-btn">Questions ?</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
