import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Home/components/Service/Service";
import { DriverController } from "../../redux/controllers/DriverController";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllServices();
  }, []);

  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  const getAllServices = async () => {
    try {
      const res = await DriverController.getAllServices();
      setServiceData(res.data.result);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <div id="Heading-text">Our Services</div>
          </Row>

          <Row>
            <Col />
            {serviceData?.map((item) => (
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
        </>
      )}
    </Container>
  );
}
