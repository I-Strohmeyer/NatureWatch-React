import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

import "./director-view.scss";

export function DirectorView({ director, onBackClick }) {
  console.log("DirectorView: ", director);

  return (
    <Card className="director-view">
      <Card.Body>
        <Col className="director-text">
          <span>Director: </span>
          <h1> {director.Name}</h1>
        </Col>

        <Col className="director-text">
          <span>About: </span>
          <h4>{director.Bio}</h4>
        </Col>

        <Col className="director-text">
          <span>Birth: </span>
          <h4>{director.Birth}</h4>
        </Col>

        {director.Death && (
          <Col className="director-text">
            <span>Death: </span>
            <h4>{director.Death}</h4>
          </Col>
        )}

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
