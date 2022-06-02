import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";

import "./profile-view.scss";

export function _UserView({
  username,
  setUsername,
  email,
  setEmail,
  birthday,
  setBirthday,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <Col className="user-view">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>
            <span className="icon">
              <AiOutlineUser />
            </span>
            Username:
          </Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>
            <span className="icon">
              <RiLockPasswordLine />
            </span>
            Password:
          </Form.Label>
          <Form.Control
            value=""
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>
            <span className="icon">
              <AiOutlineMail />
            </span>
            E-Mail:
          </Form.Label>
          <Form.Control
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>
            <span className="icon">
              <FaBirthdayCake />
            </span>
            Birthday:
          </Form.Label>
          <Form.Control
            value={birthday}
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update Profile
        </Button>
      </Form>
    </Col>
  );
}
