import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import CompanyLogo from "../../assets/img/logo/logo2.svg";
import MsgIcon from "../../assets/img/footer/mailicon.svg";
import CallIcon from "../../assets/img/footer/callicon.svg";
import LocationIcon from "../../assets/img/footer/locationicon.svg";
import FacebookIcon from "../../assets/img/footer/facebookicon.svg";
import TweeterIcon from "../../assets/img/footer/tweetericon.svg";
import InstragramIcon from "../../assets/img/footer/instagramicon.svg";
import { useSelector } from "react-redux";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const {companyInfo} = useSelector(state => state.user)

  return (
    <Container fluid id="footer1" className="backgroundFooter">
      <Container>
        <Row>
          <Col md={4} xs={12} sm={12}>
            <Image src={CompanyLogo} style={{ width: "14rem" }} />
          </Col>
          <Col>
            <div id="Iconcontainer">
              <div>
                <Image src={MsgIcon} id="Iconimg" />
              </div>
              <div id="textcontainer">
                <div id="footerIconLabel-txt">Mail Us</div>
                <div id="footer-labelbodytxt">{companyInfo?.email ?? ""}</div>
              </div>
            </div>
          </Col>
          <Col>
            <div id="Iconcontainer">
              <div>
                <Image src={CallIcon} id="Iconimg" />
              </div>
              <div id="textcontainer">
                <div id="footerIconLabel-txt">Call Us</div>
                <div id="footer-labelbodytxt">+91 {companyInfo?.contactnumber ?? ""}</div>
              </div>
            </div>
          </Col>
          <Col>
            <div id="Iconcontainer">
              <div>
                <Image src={LocationIcon} id="Iconimg" />
              </div>
              <div id="textcontainer">
                <div id="footerIconLabel-txt">Location</div>
                <div id="footer-labelbodytxt">{companyInfo?.state ?? ""}</div>
              </div>
            </div>
          </Col>
        </Row>
        <div id="line-div" />

        <Row>
          <Col md={6} id="company-description-col">
            <div id="company-description-txt">
              Our mission is to exceed the expectations of our clients by delivering superior UPS products and services that cater to their unique needs. We are dedicated to fostering long-term partnerships built on trust, integrity, and reliability.
            </div>
            <Row>
              <Col id="icon-col">
                <Image src={FacebookIcon} />
              </Col>
              <Col id="icon-col">
                <Image src={InstragramIcon} />
              </Col>
              <Col id="icon-col">
                <Image src={TweeterIcon} />
              </Col>
              <Col md={6} xs={2} />
            </Row>
          </Col>

          <Col md={4}>
            <div id="explore-label">Explore</div>
            <div id="explore-body-text" onClick={() => navigate("/about")}>
              About Us
            </div>
            <div id="explore-body-text"  onClick={() => navigate("/services")}>Services</div>
            {/* <div id="explore-body-text">FAQ</div> */}
            <div id="explore-body-text" onClick={() => navigate("/contact")}>Contactus</div>
          </Col>
          <Col md={3}></Col>
        </Row>

        <div id="line-div" />

        <Row>
          <Col id="copyright-text">Copyright © SV Technology</Col>
        </Row>
      </Container>
    </Container>
  );
}
