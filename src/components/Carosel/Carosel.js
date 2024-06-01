import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Carosel.css";
import { DriverController } from "../../redux/controllers/DriverController";
import Loader from "../Loader/Loader";

export default function Carosel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getbanner();
  }, []);

  const getbanner = () => {
    DriverController.getAllbanners()
      .then((res) => {
        console.log(res.data);
        setImages(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  return (
    <div style={{ marginTop: "-2rem", zIndex: 0 }}>
      {loading ? (
        <Loader />
      ) : (
        <Carousel fade>
          {images?.map((item) => (
            <Carousel.Item interval={1000} style={{ objectFit: "contain" }}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
                id="carosel1"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}
