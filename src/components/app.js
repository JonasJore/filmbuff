import React, { useState, useEffect } from "react";
import { Header } from '../containers/header';
import { searchForm } from './searchForm';
import { Movie } from '../containers/movie';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=6e53e074';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(API_KEY)
      .then(response => response.json())
      .then(json => {
        setMovies(json.searchForm);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
  };

  

}

export default App;
