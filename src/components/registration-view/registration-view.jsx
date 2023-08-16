import React, { useState } from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { Row, Form, Button } from "react-bootstrap";
import axios from "axios";

import "./registration-view.scss";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // To-DO: Declare hook for each input, see task 3.6
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const validateInput = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username is required");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be at least 5 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password is required");
      isReq = false;
    } else if (password.length < 4) {
      setPasswordErr("Password should be at least 4 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("E-Mail is required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Invalid E-Mail");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validateInput();
    if (validateInput()) {
      axios
        .post("https://naturewatch-api.onrender.com/users/register", {
          Username: username,
          Password: password,
          Email: email,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
        })
        .catch((e) => {
          console.log("error registering the user");
        });
    }
  };

  return (
    <Row className="justify-content-md-center login registration">
      <Form>
        <h4>Registration</h4>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameErr && <span className="error">{usernameErr}</span>}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErr && <span className="error">{passwordErr}</span>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-Mail:</Form.Label>
          <Form.Control
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErr && <span className="error">{emailErr}</span>}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        <p>
          You already have an account? <a href="/">Log in here</a>
        </p>
      </Form>
    </Row>
  );
}

/* <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        E-Mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </form> */
