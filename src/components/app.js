import React, { useState, useEffect } from "react";

import { Movie } from '../containers/movie';
import { Header } from '../containers/header';
import { SearchForm } from '../components/searchForm';
import API_KEY from '../config/config';

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const movieTest = {
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "imdbID": "tt0120737",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setMovies([...json.Search]);
        setLoading(false);
      });
  }, []);

  const searchForMovies = searchValue => {
    setLoading(true);
    setError(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&type=movie`)
      .then(res => res.json())
      .then(json => {
        if(json.Response === "True") {
          setMovies([...json.Search]);
          setLoading(false);
        } else {
          setError(json.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="app">
      <Header headerText="FilmBuff" />
      <SearchForm searchValue={searchForMovies}/>
      <div className="movieResults">
        {loading && !error ? (
          <span>loading...</span>
        ) : error ? (
          <div>error!</div>
        ) :
          movies.map((movie, index) => (
            <Movie key={`${index}`} movie={movie} />
          ))            
        }
      </div>
    </div>
  );
};

export default App;
