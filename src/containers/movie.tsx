import React from 'react';

interface MovieType {
  Poster?: string;
  Year?: string;
  imdbID?: string;
  Title?: string;
}

interface Movie {
  movie: MovieType;
}

const movieDefaultPoster = 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_SX300.jpg';

export const Movie = ({ movie }: Movie) => {
  const movieArt = movie.Poster !== "N/A" ? movie.Poster : movieDefaultPoster;
  return (
    <div className="single-movie-element">
      <h2 className="movie-title">{movie.Title}</h2>
      <br/>
      <p className="movie-production-year">{movie.Year}</p>
      <a href={`https://www.imdb.com/title/${movie.imdbID}`}>
        <img 
          className="movieArt"
          src={movieArt}
          width="200"
          alt={movie.Title}
        />
      </a>
    </div>
  );
};