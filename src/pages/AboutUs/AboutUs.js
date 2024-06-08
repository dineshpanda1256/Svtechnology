import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import { ReactComponent as ReactLogo } from "../../assets/image/about/header.svg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { DriverController } from "../../redux/controllers/DriverController";
import Loader from "../../components/Loader/Loader";
import Utilis from "../../utils/Toast";

export default function AboutUs() {
  useEffect(() => {
    getAboutUs();
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAboutUs = () => {
    DriverController.getAboutUs()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (err.message) {
          Utilis.eToast(err.message);
        } else {
          Utilis.eToast("Something went wrong");
        }
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about1">{data[0]?.heading}</div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about2">{data[0]?.description}</div>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about1">Our Vision</div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about2">
                At SV Technology, our vision is to become the leading provider
                of UPS solutions, setting the benchmark for reliability,
                innovation, and customer satisfaction. We aim to empower
                businesses with seamless power backup solutions that ensure
                uninterrupted operations and peace of mind.
              </div>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about1">Our Mission</div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={10} id="about3">
              <div id="about2">
                Our mission is to exceed the expectations of our clients by
                delivering superior UPS products and services that cater to
                their unique needs. We are dedicated to fostering long-term
                partnerships built on trust, integrity, and reliability.
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
