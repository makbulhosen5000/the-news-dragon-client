import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
      <div>
        <h2>Login With</h2>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With GitHub
        </Button>
        <div>
          <h4 className="my-2">Find On Us</h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitch /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone />
      </div>
    );
};

export default RightNav;