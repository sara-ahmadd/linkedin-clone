//action creators
import * as actionTypes from "./actionTypes";

export const setUser = (payload) => {
  return {
    type: actionTypes.SET_USER,
    user: payload,
  };
};

