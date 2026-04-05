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
import Utilis from "../../utils/Toast";
import { useDispatch } from "react-redux";
import { setCompanyInfo } from "../../redux/Slice/userSlice";
import SEO from "../../components/SEO/SEO";

export default function Home() {
  const dispatch = useDispatch()
  const [productData, setProductData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0);
    const fn = async () => {
      try {
        const [productsRes, servicesRes, contactdetails] = await Promise.all([
          DriverController.getAllProducts(),
          DriverController.getAllServices(),
          DriverController.getContactDetails()
        ]);

        setProductData(productsRes?.data?.result?.slice(0, 9));
        setServiceData(servicesRes?.data?.result ?? []);
        dispatch(setCompanyInfo(contactdetails?.data?.result))
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      }
    };
    fn();
  }, []);

  return (
    <>
      <SEO 
        title="Home | Sv Technology - UPS Installation & Power Solutions" 
        description="Welcome to Sv Technology. We specialize in seamless UPS installation, comprehensive maintenance contracts, and emergency repair services." 
      />
      <Carosel />
      <Service serviceData={serviceData} isLoading={isLoading} />
      <Product productData={productData} isLoading={isLoading} />
      <div id="customer-say-label">What our Customer say</div>
      <CustomerFeedback />
    </>
  );
}
