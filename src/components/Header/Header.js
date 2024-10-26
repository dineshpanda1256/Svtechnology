import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import Logo from "../../assets/image/header/Logo.png";
import CompanyLogo from "../../assets/img/logo/logo.svg";
import MsgIcon from "../../assets/img/header/msgIcon.png";
import CallIcon from "../../assets/img/header/callIcon.png";
import { Button, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import TopHeader from "../TopHeader/TopHeader";

function Header() {
  const location = useLocation();
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <TopHeader />
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          id="navbar"
          variant="dark"
          collapseOnSelect="true"
        >
          <Container>
            <Navbar.Brand as={Link} to={"/"} style={{ color: "white" }}>
              <Image src={CompanyLogo} style={{ width: "14rem" }} />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="Header2"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              // className="Header2"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: "black" }}
                >
                  <Image src={CompanyLogo} style={{ width: "13rem" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Header2">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="Header1"
                >
                  <Nav.Link>
                    <div id="Iconcontainer">
                      <div>
                        <Image src={MsgIcon} id="Iconimg" />
                      </div>
                      <div id="textcontainer">
                        <div id="labeltxt">Mail Us</div>
                        <div id="labelbodytxt">info@svtechnology.com</div>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link>
                    <div id="Iconcontainer">
                      <div>
                        <Image src={CallIcon} id="Iconimg" />
                      </div>
                      <div id="textcontainer">
                        <div id="labeltxt">Call Us </div>
                        <div id="labelbodytxt">+91 9322905948</div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <NavigationHeader />
    </div>
  );
}

export default Header;
