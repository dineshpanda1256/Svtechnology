import React from "react";
import "./ProductCard.css";
import Product from "../../../assets/image/home/product.png";
import { Col, Image, Row } from "react-bootstrap";

export default function ProductCard() {
  return (
    <div id="product1">
      <div id="product5">
        <Image src={Product} id="product2" />
      </div>
      <div id="product4">
        <div id="product3">UPS</div>
        <div id="product6">MRP: 1800/-</div>
      </div>
    </div>
  );
}
