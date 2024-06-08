import React from "react";
import "./ProductCard.css";
import Product from "../../../assets/image/home/product.png";
import { Col, Image, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  console.log(item, "in card product");
  const navigate = useNavigate();
  return (
    <div id="product1" onClick={() => navigate("/productDetails")}>
      <div id="product7">10% off</div>
      <div id="product5">
        <Image src={item?.img} id="product2" />
      </div>
      <div id="product4">
        <div>
          <div id="product3">{item?.productname}</div>
          <div id="product6">MRP: {item?.price}/-</div>
        </div>
        <div id="product8">
          View details <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
