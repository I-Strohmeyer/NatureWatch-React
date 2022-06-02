import React from "react";

import "./profile-view.scss";

export function FavoriteView({ favoriteMovies, movies }) {
  const finalFavArray = favoriteMovies.map(function (obj) {
    return obj._id;
  });

  console.log(finalFavArray);

  if (favoriteMovies.length == 0) {
    return <p>You have no fav movies</p>;
  }
  {
    favoriteMovies.length > 0 &&
      movies.map((movie) => {
        if (movie._id === finalFavArray.find((fav) => fav === movie._id)) {
          return (
            <div className="favorite-view">
              <p>Test</p>
            </div>
          );
        }
      });
  }
}
