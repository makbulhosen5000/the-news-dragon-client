import React from 'react';
import moment from "moment";
import logo from '../../../assets/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <Container>
        <div className="text-center">
          <img src={logo} alt="" />
          <p>Journalism Without Fear or Favour</p>
          <small>{moment().format("dddd, MMMM, Do YYYY")}</small>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee speed={100} pauseOnClick>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Profile</Nav.Link>
                  <Link><Button variant='dark'>Login</Button></Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    );
};

export default Header;