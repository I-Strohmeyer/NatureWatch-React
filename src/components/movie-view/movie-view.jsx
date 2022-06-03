import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import "./movie-view.scss";

export class MovieView extends React.Component {
  constructor(props) {
    super(props);

    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(movie) {
    console.log(movie);
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://naturewatch-app.herokuapp.com/users/${userId}/watchlist/${movie._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        alert("Added to watchlist");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card style={{ width: "25rem" }} className="movie-view">
        {/* Placeholder image */}
        <Card.Img
          variant="top"
          src={movie.ImagePath}
          crossOrigin="anonymous"
          onClick={() => this.addFavorite(movie)}
        />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Card.Text>Year: {movie.Year}</Card.Text>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">{movie.Director.Name}</Button>
          </Link>

          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">{movie.Genre.Name}</Button>
          </Link>
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
  movie: PropTypes.shape({
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
