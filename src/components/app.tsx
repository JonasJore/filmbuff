//@ts-ignore
import React, { useReducer, useEffect } from "react";

import { Movie } from '../containers/movie';
import { Header } from '../containers/header';
import { SearchForm } from './searchForm';
import { movieReducer, SEARCH_MOVIES, SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCESS } from '../reducer/movieReducer';
import API_KEY from '../config/config';

interface AppState {
  loading: boolean,
  movies: string[],
  error: string;
}

const initialState: AppState = {
  loading: true,
  movies: [],
  error: null,
}

const API_URL: string = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const prepareSearch = (search: string): string => 
  search.split(' ').join('-')

export const App = (): JSX.Element => {
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


  const searchForMovies = (searchValue: string): void => {
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

  const { 
    movies, 
    error, 
    loading 
  } = state;

  return (
    <div className="app">
      <Header headerText="FilmBuff" />
      <SearchForm searchTitle={searchForMovies}/>
      <div className="movieResults">
        {loading && !error ? (
          <span>loading...</span>
        ) : error ? (
          <div>{error}</div>
        ) :
          movies.map((movie: { Title: any; }, index: any) => (
            <Movie key={`${index}--${movie.Title}`} movie={movie} />
          ))            
        }
      </div>
    </div>
  );
};