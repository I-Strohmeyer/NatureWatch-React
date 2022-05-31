import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

import "./genre-view.scss";

export function GenreView({ genre, onBackClick }) {
  console.log(genre);
  return (
    <Card className="genre-view">
      <Card.Body>
        <Col className="genre-text">
          <span>Genre: </span>
          <h1>{genre.Name}</h1>
        </Col>

        <Col className="director-text">
          <span>Description:</span>
          <h4>{genre.Description}</h4>
        </Col>

        <Col className="justify-content-between d-flex">
          <Button
            type="submit"
            onClick={() => {
              onBackClick();
            }}
          >
            Go back
          </Button>

          <Link to={`/`}>
            <Button type="submit">Back to Overview</Button>
          </Link>
        </Col>
      </Card.Body>
    </Card>
  );
}
