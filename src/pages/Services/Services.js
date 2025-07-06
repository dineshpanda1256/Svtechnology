import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Home/components/Service/Service";
import { DriverController } from "../../redux/controllers/DriverController";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import SkeletonLoader from "../../components/Skeleton/Skeleton";

export default function Services() {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAllServices = async () => {
      try {
        const res = await DriverController.getAllServices();
        setServiceData(res.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    getAllServices();
  }, []);


  return (
    <Container fluid>
      <Row>
        <div id="Heading-text">Our Services</div>
      </Row>
      <Row>
        <Col />
        {loading && [1, 2, 3].map(() => <Col md={3} xs={12}><SkeletonLoader height={295} borderRadius={"1rem"} width={"95%"} /></Col>)}
        {!loading && serviceData?.map((item) => (
          <Col md={3} xs={12}>
            <div id="card-service-page">
              <img src={item?.service_image} id="image-div" />
              <div id="service-card-title">{item?.servicename}</div>
              <div id="service-card-desp">{item?.description}</div>
            </div>
          </Col>
        ))}
        <Col />
      </Row>
    </Container>
  );
}
