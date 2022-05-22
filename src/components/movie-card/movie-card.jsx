import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap/";

import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movieData, onMovieClick } = this.props;

    return (
      <Card className="movie-card">
        <Card.Img variant="top" src={movieData.ImagePath} />
        <Card.Body>
          <div>
            <Card.Title>{movieData.Title}</Card.Title>
            <Card.Text>{movieData.Description}</Card.Text>
          </div>
          <Button onClick={() => onMovieClick(movieData)} variant="link">
            Open
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

/*return (
      <div
        className="movie-card"
        onClick={() => {
          onMovieClick(movieData);
        }}
      >
        {movieData.Title}
      </div>
    ); */
