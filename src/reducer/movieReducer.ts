import { MovieAction, MovieReducerActions, MovieState } from "./types";

const {
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_SUCCESS
} = MovieReducerActions;

export const movieReducer = (state: MovieState, action: MovieAction) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SEARCH_MOVIES_SUCCESS:
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
