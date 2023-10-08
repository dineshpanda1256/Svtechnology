import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
// import mail from "../../assets/Group 1.png";
// import jbs from "../../assets/header/jbslogo.png";
import { Link, useLocation } from "react-router-dom";
import twitterLogo from "../../assets/image/footer/twitterLogo.png"
import CompanyLogo from "../../assets/image/header/companyLogo.svg";

export default function Footer() {
  const location = useLocation();
  
  return (
    <>
     
          <Container fluid id="footer1" className="backgroundFooter">
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <Row>
                    <div id="mailStoneDiv">
                    <img src={CompanyLogo} alt="logo" id="footer7" />
                    </div>
                  </Row>
                  
                </Col>
               
                <Col id="footer13">
                <div>
                    <Row id="footer2">
                      <Link to="/about" id="footer12">About Us</Link>
                    </Row>
                    {/* <Row id="footer2"><Link to="/privacypolicy" id="footer12">Privacy Policy</Link></Row> */}
                    <Row id="footer2"><Link  to="/contact" id="footer12">Contact Us</Link></Row>
                  </div>
                </Col>
                <Col md={4} lg={4} sm={12} xs={12} id="footer3">
                  <Row id="footer4">Get In Touch</Row>
                  <Row id="footer2">
                    <a
                      id="footer10"
                      target="_blank"
                      href="https://goo.gl/maps/aLUHpVnLJSin1Vn78"
                    >
                      Krishna Kanhaiya society, Sector 8, Airoli, Navi Mumbai, Maharashtra 400708
                    
                    </a>
                  </Row>
                  <Row id="footer2">
                    <a id="footer10" href="tel:+919322905948">
                      (+91) 9322905948
                    </a>
                  </Row>

                  <Row id="footer2">
                    <a id="footer10" href="mailto:info@svtechnology.com">
                        info@svtechnology.com
                    </a>
                  </Row>

                  
                </Col>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <div>
                  <Row id="footer4">Follow Us</Row>
                  <Row id="footer5">
                    <div id="footer6">
                      <a href="https://www.youtube.com/" target="_blank">
                        <AiOutlineYoutube id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.facebook.com/" target="_blank">
                        <RiFacebookCircleFill id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://twitter.com/" target="_blank">
                        {/* <AiOutlineTwitter id="footer9" /> */}
                        <img src={twitterLogo}  style={{width:'100%', height:'2.2vh', borderRadius:'0.2rem', marginTop:'-0.18rem'}}/>
                        
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram id="footer9" />
                      </a>
                    </div>
                  </Row>
                  </div>
                </Col>
                <Col md={2} lg={2} sm={12} xs={12} id="footer3"></Col>
              </Row>
            </Container>
          </Container>
    </>
  );
}
