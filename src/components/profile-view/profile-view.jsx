import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Col } from "react-bootstrap";

export const ProfileView = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const favoriteMovies = movies.filter((movie) => movie.favorite);

  const getUser = (token) => {
    axios
      .get("https://naturewatch-app.herokuapp.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeFavorite = (id) => {};

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>
              <p>Username: {user}</p>
              <p>Password: {password}</p>
              <p>Email: {email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
