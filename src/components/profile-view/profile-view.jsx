import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Accordion, Button } from "react-bootstrap";
import { _UserView } from "./_user-view";
import { FavoriteView } from "./_favorite-view";

import "./profile-view.scss";

export function ProfileView({ movies }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getUser = (token) => {
    axios
      .get(`https://naturewatch-app.herokuapp.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        //console.log(response.data);
        setUsername(response.data.Username);
        setEmail(response.data.Email);
        setFavoriteMovies(response.data.FavoriteMovies);
        setBirthday(response.data.Birthday);
        setPassword(response.data.Password);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser(token);
  }, []);

  const deleteAccount = () => {
    axios
      .delete(`https://naturewatch-app.herokuapp.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="justify-content-md-center profile-view">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Profile</Card.Title>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Edit User</Accordion.Header>
                <Accordion.Body>
                  <_UserView
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    birthday={birthday}
                    setBirthday={setBirthday}
                  ></_UserView>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Button
              variant="primary"
              type="submit"
              className="delete-btn"
              onClick={deleteAccount}
            >
              Delete Account
            </Button>
          </Card.Body>
        </Card>

        <Card className="favorite-view">
          <Card.Body>
            <Card.Title>Favorite Movies</Card.Title>
            <FavoriteView
              favoriteMovies={favoriteMovies}
              movies={movies}
            ></FavoriteView>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
