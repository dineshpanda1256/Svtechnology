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
import OrderDetailsCanvas from "./components/OrderDetailsCanvas/OrderDetailsCanvas";
import Utilis from "../../utils/Toast";

export default function ProductDetails() {
  const Razorpay = useRazorpay();
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, userInfo } = useSelector((state) => state.user);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedImg, setSelectedImg] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false); // State to track
  const [address, setAddress] = useState("");
  const [landMark, setLandMark] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativePhone, setAlternativePhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [showFillOrderCanvas, setShowFillOrderCanvas] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function GenerateOrderID(userID) {
    // Generate a random alphanumeric string of a specified length
    const generateRandomString = (length) => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    const randomString = generateRandomString(8); // Generate an 8-character random string
    const orderID = `${userID}-${randomString}`;
    return orderID;
  }

  function isValid() {
    if (!address) {
      Utilis.eToast("Please enter your address.");
      return false;
    } else if (address?.length < 20) {
      Utilis.eToast("Please enter a valid address.");
      return false;
    } else if (!landMark) {
      Utilis.eToast("Please enter a landmark.");
      return false;
    } else if (!phone) {
      Utilis.eToast("Please enter your phone number.");
      return false;
    } else if (phone.length !== 10) {
      Utilis.eToast("Please enter a valid phone number.");
      return false;
    } else if (!alternativePhone) {
      Utilis.eToast("Please enter your alternative phone number.");
      return false;
    } else if (alternativePhone.length !== 10) {
      Utilis.eToast("Please enter a valid alternative phone number.");
      return false;
    } else if (!pincode) {
      Utilis.eToast("Please enter a valid pincode.");
      return false;
    } else if (!state) {
      Utilis.eToast("State information is missing. Please check your pincode.");
      return false;
    } else if (!district) {
      Utilis.eToast(
        "District information is missing. Please check your pincode."
      );
      return false;
    } else if (!city) {
      Utilis.eToast("City information is missing. Please check your pincode.");
      return false;
    }
    return true;
  }

  const handleCreateOrder = async () => {
    if (isValid()) {
      setShowFillOrderCanvas(false);
      try {
        setPaymentLoading(true);
        const generateRandomOrderID = await GenerateOrderID(userInfo?._id);
        const data = {
          product_id: id,
          user_id: userInfo._id,
          order_id: generateRandomOrderID,
          price: Number(productDetails?.price),
          address: address,
          pincode: pincode,
          landMark: landMark,
          phone: phone,
          alternativePhone: alternativePhone,
          state: state,
          city: city,
          district: district,
        };

        console.log("creating order", data);
        await DriverController.createOrder(data).then((res) => {
          console.log("order created", res);
          handlePayment(generateRandomOrderID);
        });
      } catch (e) {
        console.error("order created", e);
        setPaymentLoading(false);
      }
    }
  };

  const handlePayment = async (generateRandomOrderID) => {
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
          handleVerifyPayment(response, generateRandomOrderID);
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout form closed");
          },
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

  const handleVerifyPayment = async (razorpayResponse, orderId) => {
    try {
      const data = {
        ...razorpayResponse,
        product_id: id,
        user_id: userInfo?._id,
        order_id: orderId,
      };

      console.log("getting", data);

      await DriverController.verifyPayment(data);
    } catch (error) {
      console.error("err while getting verify payment", error);
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
              onClick={
                token ? () => setShowFillOrderCanvas(true) : () => handleLogin()
              }
              style={{ width: "170px", height: "40px", marginTop: "20px" }}
              isLoading={paymentLoading}
            >
              Order Now
            </GlobalButton>
            <OrderDetailsCanvas
              show={showFillOrderCanvas}
              onHide={() => setShowFillOrderCanvas(false)}
              placement={"bottom"}
              address={address}
              setAddress={setAddress}
              landMark={landMark}
              setLandMark={setLandMark}
              phone={phone}
              setPhone={setPhone}
              alternativePhone={alternativePhone}
              setAlternativePhone={setAlternativePhone}
              pincode={pincode}
              setPincode={setPincode}
              state={state}
              setState={setState}
              city={city}
              setCity={setCity}
              district={district}
              setDistrict={setDistrict}
              handleCreateOrder={() => handleCreateOrder()}
            />
            <Specification productDetails={productDetails} />
          </Col>
        </Row>
      )}
    </Container>
  );
}
