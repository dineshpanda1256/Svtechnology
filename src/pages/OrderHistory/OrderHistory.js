import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { useParams } from "react-router-dom";
import { DriverController } from "../../redux/controllers/DriverController";
import { Col, Container, Row } from "react-bootstrap";
import OrderCard from "./components/OrderCard/OrderCard";
import Loader from "../../components/Loader/Loader";

function OrderHistory() {
  const { id } = useParams();
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await DriverController.getAllOrdersHistory({ _id: id });
      setOrderHistory(response.data.orders || []);
      console.log("All orders history", response);
    } catch (error) {
      console.error("Error fetching order history:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <div id="Heading-text">Order History</div>
        {loading ? (
          <Loader /> // Show loader while fetching data
        ) : orderHistory.length > 0 ? (
          orderHistory.map((item) => (
            <Col md={3} key={item._id}>
              <OrderCard item={item} />
            </Col>
          ))
        ) : (
          <p>No order history available.</p> // Show this message if no orders found
        )}
      </Row>
    </Container>
  );
}

export default OrderHistory;
