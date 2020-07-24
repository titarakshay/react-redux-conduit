import { createStore, applyMiddleware } from "redux";
import { ADD_ARTICLES } from "./Types";

const initalState = {
  articles: [],
  tags: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return { ...state, articles: action.payload };

    default:
      return state;
  }
}

function logger(store) {
  return function (next) {
    return function (action) {
      if (typeof action == "function") {
      }
      return next(action);
    };
  };
}

export let store = createStore(reducer, applyMiddleware(logger));
