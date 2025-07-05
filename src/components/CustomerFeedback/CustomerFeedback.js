import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import "./CustomerFeedback.css";
import { FaUser } from "react-icons/fa";

export default function CustomerFeedback() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const feedback = [
    {
      name: "Dinesh Panda",
      message: "Greate Service.",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      message: "Great service, highly recommend!",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      message: "Very satisfied with the product.",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ram Prasad",
      message: "Greate Serive Experience.",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mohan Sahu",
      message: "Quick Service. Greate Staff.",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={3000}
    >
      {feedback.map((item, index) => (
        <div key={index} className="feedbackCardContainer">
          <FaUser id="customerImage" />
          <h3 className="feedbackName">{item.name}</h3>
          <p className="feedbackMessage">{item.message}</p>
          <div id="ratingContainer">
            <ReactStars
              count={5}
              value={item.rating}
              size={24}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
