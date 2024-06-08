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
import Service from "./components/Service/Service";
import Product from "./components/Product/Product";
import CustomerFeedback from "../../components/CustomerFeedback/CustomerFeedback";

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
      setProductData(res?.data?.result?.slice(0, 6));
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

  const data = [
    {
      image: "orange",
      title: "Affordable Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      image: "blue",
      title: "One on One Monitor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      image: "orange",
      title: "Affordable Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];

  return (
    <>
      <Carosel />
      <Service serviceData={data} />
      <Product productData={productData} />
      <div id="customer-say-label">What our Customer say</div>
      <CustomerFeedback />
    </>
  );
}
