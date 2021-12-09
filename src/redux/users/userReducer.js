import { postTypes } from "../posts/postTypes";
import { userTypes } from "./userTypes";

const initialState = {
  profile: null,
  currentUser: null,
  name: null,
  description: null,
  photo: null,
  followers: [],
  following: [],
  liked: [],
  saved: [],
  chats: [],
  likedPosts: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.setName:
      return { ...state, name: payload };
    case userTypes.setUser:
      return { ...state, ...payload };
    case userTypes.logout:
      return initialState;
    case userTypes.setProfile:
      return {
        ...state,
        profile: payload,
        ...(payload?.currentUser ? { followers: payload.user.followers } : {}),
      };
    case userTypes.follow:
      return {
        ...state,
        following: [...state.following, payload],
        profile: {
          ...state.profile,
          user: {
            ...state.profile.user,
            isFollowing: true,
            followers: [...state.profile.user.followers, state.currentUser.uid],
          },
        },
      };
    case userTypes.unFollow:
      return {
        ...state,
        following: state.following.filter((follower) => follower != payload),
        profile: {
          ...state.profile,
          user: {
            ...state.profile.user,
            isFollowing: false,
            followers: state.profile.user.followers.filter(
              (follower) => follower != state.currentUser.uid
            ),
          },
        },
      };
    case postTypes.like:
      return { ...state, liked: [...state.liked, payload] };
    case postTypes.dislike:
      return {
        ...state,
        liked: state.liked.filter((postId) => postId != payload),
      };
    case userTypes.savePost:
      return { ...state, saved: [...state.saved, payload] };
    case userTypes.unsavePost:
      return {
        ...state,
        saved: state.saved.filter((postId) => postId != payload),
      };
    case userTypes.getChats:
      return { ...state, chats: payload };
    case userTypes.receiveMessage:
      const chats = state.chats.map((chat) => {
        if (chat.uid === payload.chatId) {
          chat.messages = [...chat.messages];
        }

        return chat;
      });

      return { ...state, chats };
    case userTypes.updateProfile:
      return { ...state, ...payload };
    case userTypes.getLiked:
      return { ...state, likedPosts: payload };
    default:
      return state;
  }
};
