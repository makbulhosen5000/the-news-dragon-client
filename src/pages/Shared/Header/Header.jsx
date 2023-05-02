import React, { useContext } from 'react';
import moment from "moment";
import logo from '../../../assets/logo.png';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


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
        </div>
      </Container>
    );
};

export default Header;