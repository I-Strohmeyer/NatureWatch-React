import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // To-DO: Declare hook for each input, see task 3.6
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post("https://naturewatch-api.onrender.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((error) => {
        console.log(error, "no such user");
      });
  };

  return (
    <Row className="justify-content-md-center login">
      <Form>
        <h4>Login</h4>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log in
        </Button>
        <p>
          Don't have an account yet? <a href="/register">Register here</a>
        </p>
      </Form>
    </Row>
  );
}
