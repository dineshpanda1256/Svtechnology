import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import Specification from "./components/Specification/Specification";
import { DriverController } from "../../redux/controllers/DriverController";
import useRazorpay from "react-razorpay";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const Razorpay = useRazorpay();
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedImg, setSelectedImg] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false); // State to track

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const productImg = [
  //   {
  //     prdPhoto: "https://via.placeholder.com/150",
  //   },
  //   {
  //     prdPhoto: "https://via.placeholder.com/150",
  //   },
  //   {
  //     prdPhoto: "https://via.placeholder.com/150",
  //   },
  //   {
  //     prdPhoto: "https://via.placeholder.com/150",
  //   },
  // ];

  const handlePayment = async () => {
    setPaymentLoading(true);
    const data = {
      amount: Number(productDetails?.price),
    };

    try {
      const result = await DriverController.payment(data);
      console.log("result ", result);
      setPaymentLoading(false);
      const options = {
        key: "rzp_test_DNDRtYFOQjaovg", // Replace with your actual Razorpay key ID
        amount: result.data.amount, // Amount in paise (1 INR = 100 paise)
        currency: "INR",
        name: "Jharanai",
        description: "Payment",
        image: "https://github.com/razorpay",
        order_id: result.data.id,
        handler: function (response) {
          console.log("razorpay res", response);
          // Handle the success scenario here
        },
        prefill: {
          name: "Your Name",
          email: "your-email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentLoading(false);
      // Handle the error scenario here
    }
  };

  const handleLogin = () => {
    alert("Please Login To Buy");
    navigate("/login");
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const res = await DriverController.getProductDetailsById({ _id: id });
      console.log(res.data.result);
      setProductDetails(res.data.result);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error while fetching product details", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  const calculateMRP = (item) => {
    // Assuming discount is in percentage
    const discountPercentage = parseFloat(item?.discount);
    const sellingPrice = parseFloat(item?.price);
    if (!isNaN(discountPercentage) && !isNaN(sellingPrice)) {
      const mrp = sellingPrice / (1 - discountPercentage / 100);
      return mrp.toFixed(2); // Round to 2 decimal places
    }
    return null;
  };
  return (
    <Container id="product-detail-container">
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col md={4}>
            <img
              src={selectedImg || productDetails?.img}
              id="productImage"
              alt="Product"
            />
            <div id="smallProductImgContainer">
              <div
                onClick={() => setSelectedImg(productDetails?.img)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={productDetails?.img}
                  id="smallProductImage"
                  alt="Product"
                />
              </div>
              {productDetails?.multipleImg?.map((item, index) => (
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImg(item)}
                >
                  <img src={item} id="smallProductImage" alt="Small Product" />
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <div id="product-name-text">
              {productDetails?.productname || "N/A"}
            </div>
            <div id="product-ratingContainer">
              <ReactStars
                count={5}
                value={productDetails?.ratings || 0}
                size={24}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
              />
              {/* <div id="ratingText">3,253 Ratings </div> */}

              {/* <div id="ratingText">3,253 Ratings & 397 Reviews</div> */}
            </div>
            <div id="desc-text">
              {productDetails?.productDescription || "N/A"}
            </div>
            <div id="price-text">
              ₹{productDetails?.price || "N/A"}
              <del id="mrp-text">₹{calculateMRP(productDetails)}</del>{" "}
              <span id="offer-percent-text">
                {productDetails?.discount} off
              </span>
            </div>
            <GlobalButton
              onClick={token ? () => handlePayment() : () => handleLogin()}
              style={{ width: "170px", height: "40px", marginTop: "20px" }}
              isLoading={paymentLoading}
            >
              Order Now
            </GlobalButton>
            <Specification productDetails={productDetails} />
          </Col>
        </Row>
      )}
    </Container>
  );
}
