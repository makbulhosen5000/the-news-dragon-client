import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <div className="container text-center py-5">
      <img src={logo} alt="" />
      <h4>Journalism Without Fear or Favour</h4>
      <h4>{moment().format("dddd, MMMM Do, YYYY")}</h4>
      <div className="d-flex bg-warning p-2">
        <Button className="rounded-0" variant="danger">
          Latest
        </Button>

        <Marquee direction="left" pauseOnHover="true" speed="100">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="">Profile</Nav.Link>
              <Nav.Link eventKey={2} to="">
                <Button variant="danger">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
