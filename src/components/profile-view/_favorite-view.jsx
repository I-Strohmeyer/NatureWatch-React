import React from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";

import "./profile-view.scss";

export function FavoriteView({ favoriteMovies, movies }) {
  const finalFavArray = favoriteMovies.map(function (obj) {
    return obj._id;
  });

  console.log(finalFavArray);

  const result = movies.filter(({ _id }) => finalFavArray.includes(_id));

  function removeFavorite(movie) {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://naturewatch-app.herokuapp.com/users/${userId}/watchlist/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        alert("Removed from watchlist");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (favoriteMovies.length == 0) {
    return <p>You have no fav movies</p>;
  }

  if (favoriteMovies.length > 0) {
    return result.map((movie) => (
      <Col className="fav-item" key={movie._id}>
        <p>{movie.Title}</p>
        <Button onClick={removeFavorite(movie)}>Remove</Button>
      </Col>
    ));
  }
}
