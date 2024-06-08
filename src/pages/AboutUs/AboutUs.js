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
          {/* <Row>
          <Image
            src={require("../../assets/image/about/header.jpg")}
            style={{ padding: "0" }}
          />
        </Row> */}

          <Row>
            <Col></Col>
            <Col xs={12} id="about3">
              <div id="about1">{data[0]?.heading}</div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={12} id="about3">
              <div id="about2">{data[0]?.description}</div>
            </Col>
            <Col></Col>
          </Row>
          {/* <Row>
          <Col></Col>
          <Col
           
          >
            <Button  style={{alignSelf:"center",display:"flex"}}>View Services</Button>
          </Col>
          <Col></Col>
        </Row> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <div>
            <Button>View Details</Button>
          </div> */}
          </div>
        </Container>
      )}
    </>
  );
}
