import { combineReducers } from "redux";
// Reducers
import { userReducer } from "./user";
// Actions
import { USER } from "./user/userActions";

export const rootReducer = combineReducers({ user: userReducer });

export const ACTIONS = {
  USER,
};
