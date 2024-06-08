import React from "react";
import "./ProductCard.css";
import Product from "../../../assets/image/home/product.png";
import { Col, Image, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  console.log(item, "in card product");
  const navigate = useNavigate();

  // Calculate MRP from discount

  return (
    <div id="product1" onClick={() => navigate(`/productDetails/${item._id}`)}>
      <div id="product7">{item?.discount} off</div>
      <div id="product5">
        <Image src={item?.img} id="product2" />
      </div>
      <div id="product4">
        <div>
          <div id="product3">{item?.productname}</div>
          <div id="product6">
            <span id="actual-price-text">₹{item?.price}/-</span>{" "}
          </div>
        </div>
        <div id="product8">
          View details <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
