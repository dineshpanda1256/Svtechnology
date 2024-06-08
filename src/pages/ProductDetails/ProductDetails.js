import React from "react";
import "./ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function ProductDetails() {
  const productImg = [
    {
      prdPhoto: "https://via.placeholder.com/150",
    },
    {
      prdPhoto: "https://via.placeholder.com/150",
    },
    {
      prdPhoto: "https://via.placeholder.com/150",
    },
    {
      prdPhoto: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container id="product-detail-container">
      <Row>
        <Col md={4}>
          <img src={"https://via.placeholder.com/150"} id="productImage" />

          <div id="smallProductImgContainer">
            {productImg.map((item) => (
              <div>
                <img src={item.prdPhoto} id="smallProductImage" />
              </div>
            ))}
          </div>
        </Col>
        <Col>
          <div>UPS 850W</div>
          <div id="product-ratingContainer">
            <ReactStars
              count={5}
              value={3.5}
              size={24}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />
            <div id="ratingText">3,253 Ratings & 397 Reviews</div>
          </div>

          <div>
            Elevate your sleep experience with the Dream Comfort Mattress.
            Engineered with cutting-edge technology and premium materials, this
            mattress promises unparalleled comfort and rejuvenation for a
            restful night's sleep.
          </div>

          <div>₹13,399</div>

          <Button>Order Now</Button>
        </Col>
      </Row>
    </Container>
  );
}
