import React, { useReducer, useEffect } from "react";

import { Movie } from '../containers/movie';
import { Header } from '../containers/header';
import { SearchForm } from '../components/searchForm';
import API_KEY from '../config/config';

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const initialState = {
  loading: true,
  movies: [],
  error: null,
}

const SEARCH_MOVIES = "SEARCH_MOVIES";
const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
const SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED";

// todo: trekkes ut senere.
export const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SEARCH_MOVIES_SUCCESS:
      console.log(action.payload, "sfodibns")
      return {
        ...state,
        loading: false,
        movies: action.payload,
      }
    case SEARCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }

}

const prepareSearch = search => search.split(' ').join('-')

export const App = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(jsonResponse => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: [...jsonResponse.Search],
        });
      });
  }, []);


  const searchForMovies = searchValue => {
    const preparedSearch = prepareSearch(searchValue);

    dispatch({
      type: SEARCH_MOVIES,
    });

    fetch(`http://www.omdbapi.com/?s=${preparedSearch}&apikey=${API_KEY}&type=movie`)
      .then(res => res.json())
      .then(json => {
        if(json.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: json.Search,
          })
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILED,
            error: json.Error,
          });
        }
      });
  };

  const { movies, error, loading } = state;

  return (
    <div className="app">
      <Header headerText="FilmBuff" />
      <SearchForm searchValue={searchForMovies}/>
      <div className="movieResults">
        {loading && !error ? (
          <span>loading...</span>
        ) : error ? (
          <div>{error}</div>
        ) :
          movies.map((movie, index) => (
            <Movie key={`${index}--${movie.Title}`} movie={movie} />
          ))            
        }
      </div>
    </div>
  );
};