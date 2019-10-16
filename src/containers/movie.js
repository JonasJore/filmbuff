import React from 'react';

const movieDefaultPoster = 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_SX300.jpg';
export const Movie = ({ movie }) => {
  const movieArt = movie.Poster !== "N/A" ? movie.Poster : movieDefaultPoster;
  return (
    <div className="single-movie-element">
      <h2 className="movie-title">{movie.Title}</h2>
      <img 
        className="movieArt"
        src={movieArt}
        width="200"
        alt={movie.title}
      />
    </div>
  );
};