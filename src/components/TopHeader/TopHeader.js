import React from "react";
import "./TopHeader.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <Container fluid id="top-header-container">
      <Row>
        <Col id="openingTextCol" md={2} xs={8} order={{ xs: 3, md: 1 }}>
          Opening Hours: 06:00 to 20:00
        </Col>
        <Col md={6} xs={0} id="hide-col"></Col>
        <Col id="icon-col" xs={4} md={4} order={{ xs: 2, md: 3 }}>
          <FaInstagram id="icon-style" />
          <FaFacebook id="icon-style" />
          <FaXTwitter id="icon-style" />
        </Col>
      </Row>
    </Container>
  );
}
