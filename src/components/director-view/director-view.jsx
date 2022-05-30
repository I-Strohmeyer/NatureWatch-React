import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

export function DirectorView({ movie, onBackClick }) {
  return (
    <Card className="director-view">
      <Card.Body>
        <Col className="d-sm-flex justify-content-between justify-content-xl-start">
          <Card.Text className="label titles h3">Name: </Card.Text>
          <span className="movie-director-bio titles ml-3 h1">
            {movie.Director.Name}
          </span>
        </Col>

        <Col className="d-sm-flex justify-content-between justify-content-xl-start">
          <Card.Text className="label titles h3">Bio: </Card.Text>
          <span className="movie-director-bio card-text ml-3 ">
            {director.Bio}
          </span>
        </Col>

        <Col className="d-sm-flex justify-content-between justify-content-xl-start">
          <Card.Text className="label titles h3">Born: </Card.Text>
          <span className="movie-director-birth titles ml-3 h1">
            {director.Birth}
          </span>
        </Col>

        {director.Death && (
          <Col className="d-sm-flex justify-content-between justify-content-xl-start">
            <Card.Text className="label titles h3">Death: </Card.Text>
            <span className="movie-director-death titles ml-3 h1">
              {director.Death}
            </span>
          </Col>
        )}

        <Button
          className="custom-btn"
          type="submit"
          onClick={() => {
            onBackClick();
          }}
        >
          Go back
        </Button>
        <Link to={`/`}>
          <Button className="custom-btn" type="submit">
            Back to List
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
