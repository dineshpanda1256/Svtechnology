import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
import SkeletonLoader from "../../../../components/Skeleton/Skeleton";

export default function Service({ serviceData,isLoading }) {
  return (
    <Container fluid id="service-container">
      <Row>
        <div id="service-heading-text">Services</div>
      </Row>
      <Row>
        <Col />
        {isLoading && [1,2,3].map(() => <Col md={3} xs={12}><SkeletonLoader height={295} borderRadius={"1rem"} width={"94%"} /></Col>)}
        {!isLoading && serviceData?.map((item) => (
          <Col md={3} xs={12}>
            <div id="service-card">
              <img src={item?.service_image} id="image-div" />
              <div id="service-card-title">{item?.servicename}</div>
              <div id="service-card-desp">{item?.description}</div>
            </div>
          </Col>
        ))}
        <Col />
      </Row>
    </Container>
  );
}
