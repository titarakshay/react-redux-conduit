import {
  GET_ARTICLES,
  ADD_TAGS,
  IS_LOGGED,
  GET_USER,
  REMOVE_USER,
} from "./Types";

const getArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload,
  };
};

const getTags = (payload) => {
  return {
    type: ADD_TAGS,
    payload,
  };
};

const removeUserInfo = () => {
  return {
    type: REMOVE_USER,
  };
};
export function fetchArticle(url, token) {
  return function (dispatch) {
    if (token) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then(({ articles }) => dispatch(getArticles(articles)))
        .catch((error) => console.log(error));
    } else {
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.json())
        .then(({ articles }) => dispatch(getArticles(articles)))
        .catch((error) => console.log(error));
    }
  };
}

export function fetchTags(url) {
  return function (dispatch) {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ tags }) => dispatch(getTags(tags)))
      .catch((error) => console.log(error));
  };
}

const setUser = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};

const setUserLogged = (payload) => {
  return {
    type: IS_LOGGED,
    payload,
  };
};

export const registerUser = (credentials, history) => {
  return async () => {
    const url = "https://conduit.productionready.io/api/users";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const user = await response.json();
    const {
      user: { token },
    } = user;
    if (token) {
      localStorage.setItem("authToken", token);
      history.push("/");
    }
  };
};

export const loginUser = (credentials, history) => {
  return async (dispatch) => {
    const url = "https://conduit.productionready.io/api/users/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const user = await response.json();
    const {
      user: { token },
    } = user;
    if (token) {
      localStorage.setItem("authToken", token);
      dispatch(setUserLogged(true));
      history.push("/");
    }
  };
};

export const signoutUser = (dispatch) => {
  dispatch(setUserLogged(false));
  dispatch(removeUserInfo());
  localStorage.clear();
};

export const fetchUser = (token) => {
  return async (dispatch) => {
    const url = "https://conduit.productionready.io/api/user";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    });
    const userInfo = await response.json();
    const { user } = userInfo;

    dispatch(setUser(user));
    dispatch(setUserLogged(true));
  };
};
