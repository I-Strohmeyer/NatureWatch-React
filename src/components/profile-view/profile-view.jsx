import React, { useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

export function ProfileView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  //const favoriteMovies = movies.filter((movie) => movie.favorite);

  const getUser = (token) => {
    axios
      .get(`https://naturewatch-app.herokuapp.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        console.log(response.data);
        setUsername(response.data.Username);
        setEmail(response.data.Email);
        setFavoriteMovies(response.data.FavoriteMovies);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getUser(token);

  const removeFavorite = (id) => {};

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>Username: {username}</Card.Text>
            <Card.Text>Email: {email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
