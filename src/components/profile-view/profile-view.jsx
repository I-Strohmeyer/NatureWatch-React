import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Accordion, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { _UserView } from "./_user-view";
import FavoriteView from "./_favorite-view";

import "./profile-view.scss";

import { setUser } from "../../actions/actions";
import { useParams } from "react-router-dom";

export function ProfileView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { name } = useParams();
  console.log(name);

  const getUser = (token) => {
    axios
      .get(`https://naturewatch-app.herokuapp.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        console.log("from get user in profileview", response.data);
        dispatch(setUser(response.data));
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
                  <_UserView />
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
            <FavoriteView />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
