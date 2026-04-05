import React from "react";
import "./Product.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../ProductCard/ProductCard";
import SkeletonLoader from "../../../../components/Skeleton/Skeleton";

export default function Product({ productData,isLoading=true }) {
  return (
    <Container fluid>
      <Row id="product-container">
        <div id="product-heading-text">Products</div>
        <Col md={0} lg={1} />
        <Col lg={10} md={12} sm={12} >
          <Row>
            {isLoading && [1,2,3,4].map(() => <Col lg={4}  md={3} sm={6} xs={12}><SkeletonLoader height={295} borderRadius={"1rem"} width={"84%"} /></Col>)}
            {!isLoading && productData.map((item) => (
              <Col  lg={4}  md={3} sm={6}  xs={12} id="product-col">
                <ProductCard item={item} />
              </Col>
            ))}
            <Col md={0} lg={1} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
