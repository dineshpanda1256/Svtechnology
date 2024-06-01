import React, { useEffect, useState } from "react";
import "./Home.css";
import Carosel from "../../components/Carosel/Carosel";
import { Col, Container, Row } from "react-bootstrap";
import Image2 from "../../assets/image/home/Image2.png";
import Image3 from "../../assets/image/home/Image3.png";
import Image4 from "../../assets/image/home/Image4.png";
import Image5 from "../../assets/image/home/Image5.png";
import Image6 from "../../assets/image/home/Image6.png";
import Image7 from "../../assets/image/home/Image7.png";
import HomeCard from "./HomeCard/HomeCard";
import ProductCard from "./ProductCard/ProductCard";
import { DriverController } from "../../redux/controllers/DriverController";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts();
    getAllServices();
  }, []);

  const [productData, setProductData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await DriverController.getAllProducts();
      // console.log('all products.....', res.data.result)
      setProductData(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllServices = async () => {
    try {
      const res = await DriverController.getAllServices();
      // console.log('all products.....', res.data.result)
      setServiceData(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //   <>
    <Carosel />
    //     <Container fluid>
    //       <Row>
    //         {/* <Col md={1} xs={1}></Col> */}
    //         <Col id='home1'>Service We Offer</Col>
    //         {/* <Col md={1} xs={1}></Col> */}
    //       </Row>
    //       <Container
    //         style={{
    //           marginTop: '1.5rem',
    //           paddingLeft: '2rem',
    //           paddingRight: '2rem'
    //         }}
    //       >
    //         <Row>
    //           {serviceData?.map(item => (
    //             <Col md={4} id='home12'>
    //               <HomeCard text={item?.servicename} />
    //             </Col>
    //           ))}

    //           {/* <Col md={4} id="home12" >
    //                   <HomeCard img={Image3} text="Interiors" />
    //                 </Col> */}
    //         </Row>
    //       </Container>

    //       <Row>
    //         {/* <Col md={1} xs={1}></Col> */}
    //         <Col id='home2'>OUR PRODUCTS</Col>
    //         {/* <Col md={1} xs={1}></Col> */}
    //       </Row>
    //       <Container style={{ marginTop: '2rem' }}>
    //         <Row style={{ marginTop: '1.5rem' }}>
    //           {productData?.map(item => (
    //             <Col md={3} xs={12} style={{ marginBottom: '1rem' }}>
    //               <ProductCard item={item} />
    //             </Col>
    //           ))}
    //           {/* <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
    //               <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
    //               <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col> <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>
    //               <Col md={3} xs={6} style={{marginBottom:'1rem'}}><ProductCard/></Col>                */}
    //         </Row>
    //       </Container>
    //     </Container>
    //   </>
  );
}
