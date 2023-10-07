import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Carosel.css";

export default function Carosel() {
    

    const data =[
        {
            image:require("../../assets/image/home/carosel.png")
        },
        {
            image:require("../../assets/image/header/Logo.png")
        }
    ]
  return (
    <Carousel fade>
    {data?.map((item) => (
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={item.image} alt="First slide" id="carosel1" />
      </Carousel.Item>
    ))}
  </Carousel>
  )
}
