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
        // console.log(res.data);
        const result = res?.data?.reverse();
        setImages(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };
  const SLIDE_INTERVAL = 5000;

  return (
    <div style={{ marginTop: "-2rem", zIndex: 0 }}>
      {loading ? (
        <Loader />
      ) : (
        <Carousel fade id="ch_2" interval={SLIDE_INTERVAL}>
          {images?.map((item) => (
            <Carousel.Item key={item.id}>
              {/* Add a unique key */}
              <div className="carousel-image-container">
                <img
                  src={item.image}
                  alt="Slide"
                  className="carousel-image"
                  loading="lazy"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}
