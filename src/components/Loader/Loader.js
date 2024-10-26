import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Triangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
          }}
        >
          {/* <Triangle
          height="80"
          width="80"
          color="#CF3A30"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        /> */}
          <Spinner
            animation="border"
            role="status"
            style={{ color: "blue" }}
          ></Spinner>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
