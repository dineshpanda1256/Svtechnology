import React from "react";
import "./Contactus.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function Contactus() {
  return (
      <Container fluid id="ContactConatiner">
        <iframe
          id="ContactMap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.494098370194!2d72.9936323!3d19.1460695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfd0a33eeccf%3A0x31ca93e55106d876!2sS%20V%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1696663081240!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <Row>
          <Col></Col>
          <Col md={5} lg={5} xs={12} sm={12}>
            <div id="HeadingText">Our office</div>
            <div id="AddressLabel">Address:</div>
            <div>
              Krishna Kanhaiya society, Sector 8, Airoli, Navi Mumbai,
              Maharashtra 400708
            </div>
            <div id="AddressLabel">Phone Number:</div>
            <div>(+91) NOT ADDED</div>
            <div id="AddressLabel">Email Adress:</div>
            <div>MAIL NOT ADDED</div>
          </Col>
          <Col md={5} lg={5} xs={12} sm={12}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Name"
                id="ContactInput"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email"
                id="ContactInput"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Phone number"
                id="ContactInput"
              />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3}  placeholder="Enter Your Message"  id="ContactInput"/>
            </Form.Group>
            <Form.Group className="mb-3">
            <button type="button" id="ContactButton">Submit</button>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  );
}
