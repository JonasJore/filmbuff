export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED";

interface MovieState {
  loading: boolean;
  error: any;
  movies: string[];
}

export const movieReducer = (state: any, action: any) => {
  console.log(action, "dispatched action");
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SEARCH_MOVIES_SUCCESS:
      console.log("what");
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