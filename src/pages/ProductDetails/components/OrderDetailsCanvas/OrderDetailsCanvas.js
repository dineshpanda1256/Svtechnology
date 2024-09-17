import React, { useEffect } from "react";
import { Offcanvas, Form } from "react-bootstrap";
import GlobalButton from "../../../../components/GlobalButton/GlobalButton";
import axios from "axios";

async function getLocationDetails(pincode) {
  try {
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    if (response.data && response.data[0].Status === "Success") {
      const { District, State, Block } = response.data[0].PostOffice[0];
      return {
        district: District,
        state: State,
        city: Block, // Block is often used as a city substitute
      };
    } else {
      throw new Error("Invalid Pincode");
    }
  } catch (error) {
    console.error("Error fetching location details:", error);
    return null;
  }
}

function OrderDetailsCanvas({
  show,
  onHide,
  placement,
  address,
  setAddress,
  landMark,
  setLandMark,
  phone,
  setPhone,
  alternativePhone,
  setAlternativePhone,
  pincode,
  setPincode,
  state,
  city,
  district,
  setState,
  setCity,
  setDistrict,
  handleCreateOrder,
}) {
  useEffect(() => {
    if (pincode) {
      getLocationDetails(pincode)
        .then((result) => {
          if (result) {
            const { state, city, district } = result;
            setState(state);
            setCity(city);
            setDistrict(district);
          }
        })
        .catch((error) => {
          console.error("Error getting location details:", error);
        });
    }
  }, [pincode]);

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement={placement}
      style={{
        height: "90vh",
        borderRadius: "1rem 1rem 0rem 0rem",
        padding: "1rem 2rem",
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Order Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              row={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type="text"
              value={landMark}
              onChange={(e) => setLandMark(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Alternative Phone</Form.Label>
            <Form.Control
              type="text"
              maxLength={10}
              value={alternativePhone}
              onChange={(e) => setAlternativePhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" value={state || ""} readOnly disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              value={district || ""}
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={city || ""} readOnly disabled />
          </Form.Group>
          <GlobalButton
            onClick={() => {
              handleCreateOrder();
            }}
            style={{ width: "170px", height: "40px", marginTop: "20px" }}
          >
            Order Now
          </GlobalButton>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderDetailsCanvas;
