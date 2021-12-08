import { postTypes } from "./postTypes";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postTypes.addPost:
      return { ...state, posts: [payload, ...state.posts] };
    case postTypes.getPosts:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
