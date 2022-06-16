//movie action types
export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";

//user action types
export const SET_USER = "SET_USER";

//actionCreators
export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setUser(token, user) {
  return { type: SET_USER, value: { token, user } };
}
