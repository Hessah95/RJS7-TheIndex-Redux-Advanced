import { GET_AUTHORS, GET_AUTHOR } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const getAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");

      const authors = res.data;
      dispatch({
        type: GET_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error(err);
    }
  };
};
export const getAuthor = id => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/" + id);

      const authors = res.data;

      dispatch({
        type: GET_AUTHOR,
        payload: authors
      });
    } catch (err) {
      console.error(err);
    }
  };
};
// export const deleteTask = task => {
//   return {
//     type: DELETE_TASK,
//     payload: task
//   };
// };
