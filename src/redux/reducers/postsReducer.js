import * as actions from "../actions/actionTypes";

const initialState = {
  loading: false,
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actions.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
