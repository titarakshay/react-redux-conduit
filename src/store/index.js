import { createStore, applyMiddleware } from "redux";
import {
  GET_ARTICLES,
  ADD_TAGS,
  IS_LOGGED,
  GET_USER,
  REMOVE_USER,
} from "./Types";

const initalState = {
  articles: [],
  tags: [],
  userInfo: {},
  isLogged: false,
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload };
    case ADD_TAGS:
      return { ...state, tags: action.payload };
    case IS_LOGGED:
      return { ...state, isLogged: action.payload };
    case GET_USER:
      return { ...state, userInfo: action.payload };
    case REMOVE_USER:
      return { ...state, userInfo: null };
    default:
      return state;
  }
}

function logger(store) {
  return function (next) {
    return function (action) {
      if (typeof action == "function") {
        return action(store.dispatch);
      }
      return next(action);
    };
  };
}

export let store = createStore(reducer, applyMiddleware(logger));
