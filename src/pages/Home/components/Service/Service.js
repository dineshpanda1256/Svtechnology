import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";

export default function Service({ serviceData }) {
  return (
    <Container fluid id="service-container">
      <Row>
        <div id="service-heading-text">Services</div>
      </Row>
      <Row>
        <Col />
        {serviceData?.map((item) => (
          <Col md={3} xs={12}>
            <div id="service-card">
              <div id="image-div" />
              <div id="service-card-title">{item?.title}</div>
              <div id="service-card-desp">{item?.description}</div>
            </div>
          </Col>
        ))}
        <Col />
      </Row>
    </Container>
  );
}
