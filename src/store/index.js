import { createStore, applyMiddleware } from "redux";
import { ADD_ARTICLES, ADD_TAGS, SELECT_TAGS } from "./Types";

const initalState = {
  articles: [],
  tags: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return { ...state, articles: action.payload };
    case ADD_TAGS:
      return { ...state, tags: action.payload };
    case SELECT_TAGS:
      return { ...state, articles: action.payload };
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
