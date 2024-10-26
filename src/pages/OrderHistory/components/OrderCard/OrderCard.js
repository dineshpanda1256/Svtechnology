import React from "react";
import "./OrderCard.css";
import { Col, Row } from "react-bootstrap";

function OrderCard({ item }) {
  const getEstimatedDeliveryDate = (orderTime) => {
    const currentDate = new Date(orderTime);
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 5); // Add 5 days to the current date

    // Format the date
    const year = futureDate.getFullYear();
    const month = futureDate
      .toLocaleString("en-US", { month: "long" })
      .substring(0, 3);
    const day = String(futureDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <div id="order-card-container">
      <Row>
        <Col>
          <div id="order-text-label">
            Order ID: {item?.order_id.substring(19).toUpperCase()}
          </div>
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col>
          <img
            src={item?.product_id?.img}
            id="order-image"
            alt="product image"
          />
          <div id="order-text-label" className="mt-2">
            {item?.product_id?.productname}
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="order-text-row">
          <div id="order-text-label">Price:</div>{" "}
          <div id="order-text-data">₹{item?.price}</div>
        </Col>
      </Row>
      <Row>
        <Col id="order-text-row">
          <div id="order-text-label">Payment Status:</div>{" "}
          <div id="order-text-data">{item?.payment_status}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="order-text-row">
            <div id="order-text-label">Payment Method:</div>{" "}
            <div id="order-text-data">Online</div>
          </div>
          <div id="order-text-row">
            <div id="order-text-label">Estimated Delivery Date:</div>{" "}
            <div id="order-text-data">
              {" "}
              {getEstimatedDeliveryDate(item?.createdAt)}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OrderCard;
