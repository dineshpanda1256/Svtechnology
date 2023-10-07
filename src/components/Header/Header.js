import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";
import Logo from "../../assets/image/header/Logo.png";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} id="navbar"   variant="dark">
          <Container fluid >
            <Navbar.Brand href="#" style={{color:'white'}}><Image src={Logo} style={{width:'18rem'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="Header2" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              // className="Header2"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color:'black'}}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Header2">
                <Nav className="justify-content-end flex-grow-1 pe-3" id="Header1">
                  <Nav.Link href="#action1" style={{color:'white', fontSize:'1.2rem'}} as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link  style={{color:'white', fontSize:'1.2rem'}} as={Link} to={"/about"}>Aboutus</Nav.Link>
                  {/* <Nav.Link  style={{color:'white', fontSize:'1.2rem'}} as={Link} to={"/services"}>Services</Nav.Link> */}
                  <Nav.Link  style={{color:'white', fontSize:'1.2rem'}} as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;