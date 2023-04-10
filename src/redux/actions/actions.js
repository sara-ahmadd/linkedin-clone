//action creators
import * as actionTypes from "./actionTypes";

export const setUser = (payload) => {
  return {
    type: actionTypes.SET_USER,
    user: payload,
  };
};

export const setLoading = (status) => {
  return {
    type: actionTypes.SET_LOADING_STATUS,
    status,
  };
};

export const getPosts = (payload) => {
  return {
    type: actionTypes.GET_POSTS,
    posts: payload,
  };
};
