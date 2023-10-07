import React from 'react'
import "./Home.css";
import Carosel from '../../components/Carosel/Carosel';
import { Col, Container, Row } from 'react-bootstrap';
import Image2 from "../../assets/image/home/Image2.png";
import Image3 from "../../assets/image/home/Image3.png";
import Image4 from "../../assets/image/home/Image4.png";
import Image5 from "../../assets/image/home/Image5.png";
import Image6 from "../../assets/image/home/Image6.png";
import Image7 from "../../assets/image/home/Image7.png";
import HomeCard from './HomeCard/HomeCard';
import ProductCard from './ProductCard/ProductCard';

export default function Home() {
  return (
    <>
        <Carosel/>
        <Container fluid>
            <Row>
                {/* <Col md={1} xs={1}></Col> */}
               <Col id="home1">Service We Offer</Col>
                {/* <Col md={1} xs={1}></Col> */}
            </Row>
            <Container style={{marginTop:'1.5rem', paddingLeft:'2rem', paddingRight:'2rem'}}>
            <Row>
                  <Col md={4} id="home12" >
                    <HomeCard img={Image2} text="Construction" />
                  </Col>
                  <Col md={4} id="home12" >
                    <HomeCard img={Image3} text="Interiors" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCard img={Image4} text="Fabrications" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCard img={Image5} text="Electrical" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCard img={Image6} text="Decor" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCard img={Image7} text="Plumbing" />
                  </Col>
                </Row>
            </Container>

            <Row>
                {/* <Col md={1} xs={1}></Col> */}
               <Col id="home2">OUR PRODUCTS</Col>
                {/* <Col md={1} xs={1}></Col> */}
            </Row>
            <Container style={{marginTop:'2rem'}}>
            <Row style={{marginTop:'1.5rem', }}>
                <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
                <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col> 
                <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
                <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col> <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
                <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>               
            </Row>
            </Container>
        </Container>
    </>
  )
}
