import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./posts/postReducer";
import { userReducer } from "./users/userReducer";

const reducers = combineReducers({
  userState: userReducer,
  postState: postReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
