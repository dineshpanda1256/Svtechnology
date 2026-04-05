import React from "react";
import "./ProductCard.css";
import {  Image, } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function ProductCard({ item }) {
  console.log(item, "in card product");
  const navigate = useNavigate();

  // Calculate MRP from discount

  return (
    <div id="product1" onClick={() => navigate(`/productDetails/${item._id}`)}>
      {/* <div id="product7">{item?.discount} off</div> */}
      <div id="product5">
        <Image src={item?.img} id="product2" />
      </div>
      <div id="product4">
        <div>
          <div id="product3">{item?.productname}</div>
           <ReactStars
                          count={5}
                          value={item?.ratings || 0}
                          size={24}
                          isHalf={true}
                          edit={false}
                          activeColor="#ffd700"
                        />
          {/* <div id="product6">
            <span id="actual-price-text">₹{item?.price}/-</span>{" "}
          </div> */}
        </div>
        <div id="product8">
          View details <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
