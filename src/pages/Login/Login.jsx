import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Login = () => {
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
            />
          </Form.Group>
          <Form.Text className="text-center text-danger">
            <small>Don't Have Account </small>
            <Link to="/register"> Register here</Link>
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

export default Login;