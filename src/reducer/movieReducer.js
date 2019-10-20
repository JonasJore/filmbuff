export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED";

export const movieReducer = (state = initialState, action) => {
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