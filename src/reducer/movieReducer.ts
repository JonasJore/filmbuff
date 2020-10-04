interface MovieState {
  loading: boolean;
  error: any;
  movies: MovieType[];
};

export enum MovieReducerActions {
  SEARCH_MOVIES = "SEARCH_MOVIES",
  SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS",
  SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED"
}

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Plot: string;
  Runtime: string;
}

type MovieAction = {
  type?: MovieReducerActions;
  payload?: MovieType[];
  error?: string;
}

const {
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_SUCCESS
} = MovieReducerActions;

export const movieReducer = (state: MovieState, action: MovieAction) => {
  console.log(action, "dispatched action");
  console.log(action.payload, " huhbb");
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