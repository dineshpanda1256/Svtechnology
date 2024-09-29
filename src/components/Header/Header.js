import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import Logo from "../../assets/image/header/Logo.png";
import CompanyLogo from "../../assets/image/header/Logo.png";

import { Button, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          id="navbar"
          variant="dark"
          collapseOnSelect="true"
        >
          <Container fluid>
            <Navbar.Brand as={Link} to={"/"} style={{ color: "white" }}>
              <div id="LogoDiv">
                <Image src={CompanyLogo} style={{ width: "5rem" }} />
                <div id="LogoText">Admin Panel</div>
              </div>
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
                  <div
                    style={{
                      backgroundColor: "black",
                      padding: "0.4rem",
                      borderRadius: "0.2rem",
                    }}
                  >
                    <Image src={CompanyLogo} style={{ width: "13rem" }} />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Header2">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="Header1"
                ></Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
