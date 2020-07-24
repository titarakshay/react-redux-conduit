import { ADD_ARTICLES, ADD_TAGS, SELECT_TAGS } from "./Types";

export function fetchArticle(url) {
  return function (dispatch) {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ articles }) =>
        dispatch({
          type: ADD_ARTICLES,
          payload: articles,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function fetchTags(url) {
  return function (dispatch) {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ tags }) =>
        dispatch({
          type: ADD_TAGS,
          payload: tags,
        })
      )
      .catch((error) => console.log(error));
  };
}
