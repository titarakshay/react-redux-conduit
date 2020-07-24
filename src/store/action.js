import { ADD_ARTICLES } from "./Types";
export function addArticle(payload) {
  return {
    type: ADD_ARTICLES,
    payload,
  };
}
