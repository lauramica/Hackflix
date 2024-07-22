import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarApp({}) {
  return (
    <Navbar expand="lg" className="fixed-top" id="navbarApp">
      <Container className="navbar-styles">
        <Navbar.Brand as={Link} to="/" className="navbar-styles">
          Hackflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/buscador" className="navbar-styles">
              Find a movie!
            </Nav.Link>
            <Nav.Link as={Link} to="/sobrenosotros" className="navbar-styles">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="navbar-styles">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
