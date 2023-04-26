import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
      <div className="text-center">
        <button type="button" className="btn btn-outline-primary mb-2">
          <FaGoogle /> Login With Google
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <FaGithub /> Login With GitHub
        </button>
        <div className="my-3">
            <h4>Find Us On</h4>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter />
               Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram />
               Instagram
            </ListGroup.Item>
          </ListGroup>
          
          <QZone/>
        </div>
      </div>
    );
};

export default RightNav;