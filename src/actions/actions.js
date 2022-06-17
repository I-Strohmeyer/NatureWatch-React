//movie action types
export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";

//auth action types
export const SET_AUTH = "SET_AUTH";

// user action types
export const SET_USER = "SET_USER";

//_________________________//
//actionCreators
export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setAuth(token, user) {
  return { type: SET_AUTH, value: { token, user } };
}

export function setUser(userObject) {
  return { type: SET_USER, value: userObject };
}
