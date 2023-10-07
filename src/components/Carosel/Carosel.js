import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Carosel.css";
import { DriverController } from "../../redux/controllers/DriverController";

export default function Carosel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getbanner();
  }, []);

  const getbanner = () => {
    DriverController.getAllbanners()
      .then((res) => {
        setImages(res?.data);
        // console.log("Images is......",setImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  return (
    <Carousel fade>
      {images?.map((item) => (
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={item.image}
            alt="First slide"
            id="carosel1"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
