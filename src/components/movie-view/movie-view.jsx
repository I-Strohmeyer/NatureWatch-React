import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export class MovieView extends React.Component {
  //
  render() {
    const { movieData, onBackClick } = this.props;

    return (
      <Card style={{ width: "25rem" }} className="movie-view">
        {/* Placeholder image */}
        <Card.Img variant="top" src="../../src/assets/img/login-bg-new2.png" />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
          <Card.Text>Year: {movieData.Year}</Card.Text>
          <Button
            onClick={() => {
              onBackClick(null);
            }}
            variant="primary"
          >
            Back to Overview
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    //ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

/*
<div className="movie-view">
        <div className="movie-poster">
          <img src={movieData.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movieData.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movieData.Description}</span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div> */
