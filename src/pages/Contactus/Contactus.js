import React,{useEffect} from "react";
import "./Contactus.css";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { DriverController } from "../../redux/controllers/DriverController";
import { useState } from "react";
import Utilis from "../../utils/Toast";
var validator = require("email-validator");

export default function Contactus() {
  useEffect(()=>{
      window.scrollTo(0,0);
  },[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log('name length....',name.length,validator.validate(email))

  const valiDation = () => {
    if (name.length == 0) {
      Utilis.eToast("Please Enter Your Name");
      return false;
    } else if (email.length == 0) {
      Utilis.eToast("Please Enter Your Email");
      return false;
    } else if (!validator.validate(email)) {
      Utilis.eToast("Please Enter a valid email ");
      return false;
    } else if (phoneNo.length == 0) {
      Utilis.eToast("Please Enter Your Phone Number");
      return false;
    } else {
      return true;
    }
  };

  const postContactus = () => {
    if (valiDation()) {
      setLoading(true);
      const data = {
        name: name,
        email: email,
        phone_number: phoneNo,
        message: message,
      };
      DriverController.postContactus(data)
        .then((res) => {
          if (res.status == 200) {
            Utilis.sToast("Your Data Sent Successfully");
            setLoading(false);
            setName('');
            setEmail('');
            setPhoneNo('');
            setMessage('');
          }
        })
        .catch(() => {
          Utilis.eToast("Oops Something Went Wrong");
          setLoading(false);
        });
    }
  };
  return (
    <Container fluid id="ContactConatiner">
      <iframe
        id="ContactMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.494098370194!2d72.9936323!3d19.1460695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfd0a33eeccf%3A0x31ca93e55106d876!2sS%20V%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1696663081240!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Row id="phoneView">
        <Col></Col>
        <Col md={5} lg={5} xs={12} >
          <div id="HeadingText">Our office</div>
          <div id="AddressLabel">Address:</div>
          <div>
            Krishna Kanhaiya society, Sector 8, Airoli, Navi Mumbai, Maharashtra
            400708
          </div>
          <div id="AddressLabel">Phone Number:</div>
          <div>(+91) 9322905948</div>
          <div id="AddressLabel">Email Adress:</div>
          <div>info@svtechnology.com</div>
        </Col>
        <Col md={5} lg={5} xs={12}  id="phoneView1">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your Name"
              id="ContactInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Your Email"
              id="ContactInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your Phone number"
              id="ContactInput"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Your Message"
              id="ContactInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <button
              type="button"
              id="ContactButton"
              onClick={() => postContactus()}
            >
              {loading ? (
                <div>
                  Submit <Spinner animation="border" size="sm" />
                </div>
              ) : (
                <div>Submit</div>
              )}
            </button>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
