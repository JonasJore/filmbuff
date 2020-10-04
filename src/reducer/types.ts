export type MovieState = {
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
}

export type MovieAction = {
  type?: MovieReducerActions;
  payload?: MovieType[];
  error?: string;
}
