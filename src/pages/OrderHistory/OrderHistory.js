import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { useParams } from "react-router-dom";
import { DriverController } from "../../redux/controllers/DriverController";
import { Col, Container, Row } from "react-bootstrap";
import OrderCard from "./components/OrderCard/OrderCard";
import Loader from "../../components/Loader/Loader";
import SkeletonLoader from "../../components/Skeleton/Skeleton";

function OrderHistory() {
  const { id } = useParams();
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  fetchOrderHistory();
  }, []);

 

  return (
    <Container>
      <Row>
        <div id="Heading-text">Order History</div>
        {loading && [1,2,3,4,5,6,7,8].map(() => <Col md={3} xs={12}><SkeletonLoader height={350} borderRadius={"1rem"} width={"100%"} /></Col>)}
        {!loading && (orderHistory.length > 0 ? (
          orderHistory.map((item) => (
            <Col md={3} key={item._id}>
              <OrderCard item={item} />
            </Col>
          ))
        ) : (
          <div className="noOrderFound">No order history available.</div> // Show this message if no orders found
        ))}
      </Row>
    </Container>
  );
}

export default OrderHistory;
