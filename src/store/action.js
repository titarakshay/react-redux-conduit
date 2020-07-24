import { ADD_ARTICLES, ADD_TAGS, SELECT_TAGS } from "./Types";
export function addArticle(payload) {
  return {
    type: ADD_ARTICLES,
    payload,
  };
}

export function addTags(payload) {
  return {
    type: ADD_TAGS,
    payload,
  };
}

export function selectTags(payload) {
  return {
    type: SELECT_TAGS,
    payload,
  };
}
