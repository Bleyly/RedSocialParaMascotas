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
    case postTypes.like:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.uid === payload) {
            post.likes += 1;
          }

          return post;
        }),
      };
    case postTypes.dislike:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.uid === payload) {
            post.likes -= 1;
          }

          return post;
        }),
      };
    default:
      return state;
  }
};
