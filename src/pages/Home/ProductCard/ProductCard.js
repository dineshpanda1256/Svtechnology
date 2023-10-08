import React from "react";
import "./ProductCard.css";
import Product from "../../../assets/image/home/product.png";
import { Col, Image, Row } from "react-bootstrap";

export default function ProductCard({item}) {
  console.log(item, 'in card product')
  return (
    <div id="product1">
      <div id="product5">
        <Image src={item?.img} id="product2" />
      </div>
      <div id="product4">
        <div id="product3">{item?.productname}</div>
        <div id="product6">MRP: {item?.price}/-</div>
      </div>
    </div>
  );
}
