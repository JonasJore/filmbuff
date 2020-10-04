import React from 'react';
import { MovieType } from './types';

type MoviePropTypes = {
  movie: MovieType;
}

const movieDefaultPoster = 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_SX300.jpg';

export const MovieCard = ({ movie }: MoviePropTypes) => {
  console.log(movie, " jhbjhbj");
  const movieArt = movie.Poster !== "N/A" ? movie.Poster : movieDefaultPoster;
  return (
    <div className="single-movie-element">
      <div className="left-side">
        <img
          className="movieArt"
          src={movieArt}
          alt={movie.Title}
        />
      </div>
      <div className="right-side">
        <h1 className="movie-title">{movie.Title}</h1>
        <p className="movie-production-year">Release year: {movie.Year}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} className="imdb-link">
          IMDB
        </a>
        <p>
          
        </p>
      </div>

    </div>
  );
};