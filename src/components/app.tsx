import React, { useReducer, useEffect } from "react";

import { MovieCard } from '../containers/movieCard';
import { Header } from '../containers/header';
import { SearchForm } from './searchForm';
import { 
  movieReducer, 
} from '../reducer/movieReducer';
import { MovieReducerActions, MovieType } from "../reducer/types";

interface AppState {
  loading: boolean,
  movies: any[],
  error: string;
}

const initialState: AppState = {
  loading: true,
  movies: [],
  error: null,
}

const API_URL: string = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;

const {
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_SUCCESS
} = MovieReducerActions;

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

    fetch(`http://www.omdbapi.com/?s=${preparedSearch}&apikey=${process.env.API_KEY}&type=movie`)
      .then(res => res.json())
      .then(json => {
        if(json.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: json.Search,
          });
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
      <Header headerText="FilmBuff">
        <SearchForm searchTitle={searchForMovies}/>
      </Header>
      
      <div className="movieResults">
        {loading && !error ? (
          <span>loading...</span>
        ) : error ? (
          <div>{error}</div>
        ) :
          movies.map((movie: MovieType, index: number) => (
            <MovieCard 
              key={`${index}--${movie.Title}`} 
              movie={movie} 
            />
          ))
        }
      </div>
    </div>
  );
};
