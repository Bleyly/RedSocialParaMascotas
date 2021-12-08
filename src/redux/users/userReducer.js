import { userTypes } from "./userTypes";

const initialState = {
  currentUser: null,
  name: null,
  description: null,
  photo: null,
  followers: 0,
  following: 0,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.setName:
      return { ...state, name: payload };
    case userTypes.setUser:
      return { ...state, ...payload };
    case userTypes.logout:
      return initialState;
    default:
      return state;
  }
};
