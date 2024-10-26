import React from "react";
import "./Product.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../ProductCard/ProductCard";

export default function Product({ productData }) {
  return (
    <Container fluid>
      <Row id="product-container">
        <div id="product-heading-text">Products</div>
        <Col md={1} />
        <Col md={10}>
          <Row>
            {productData.map((item) => (
              <Col md={3} id="product-col">
                <ProductCard item={item} />
              </Col>
            ))}
            <Col md={1} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
