import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    return (
      <Container className="w-25 mx-auto mt-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="mh akash"
            />
          </Form.Group>
             <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="photo url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Check type="checkbox" label="Accept Terms And Condition" />
          </Form.Group>
          <Form.Text className="text-center text-danger">
            <small>Already Have Account </small>
            <Link to="/login"> Login here</Link>
          </Form.Text>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-center text-success"></Form.Text>
          <Form.Text className="text-center text-danger"></Form.Text>
        </Form>
      </Container>
    );
};

export default Register;