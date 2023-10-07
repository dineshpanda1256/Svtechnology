import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import { ReactComponent as ReactLogo } from "../../assets/image/about/header.svg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { DriverController } from "../../redux/controllers/DriverController";

export default function AboutUs() {
  useEffect(()=>{
    getAboutUs()
  },[])

  const [data, setData] = useState([]);

  const getAboutUs = () => {
      DriverController.getAboutUs()
      .then((res)=>{
          console.log(res.data)
          setData(res.data)
      })
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Image
            src={require("../../assets/image/about/header.jpg")}
            style={{ padding: "0" }}
          />
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <div id="about1">{data[0]?.heading}</div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div id="about2">
             {data[0]?.description}
            </div>
          </Col>
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
          <div>
            <Button>View Details</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
