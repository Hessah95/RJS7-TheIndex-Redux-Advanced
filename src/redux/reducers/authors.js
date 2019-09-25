import { GET_AUTHORS, GET_AUTHOR } from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true,
  loading2: true,
  author: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      const authors = action.payload;

      return {
        ...state,
        authors: authors,
        loading: false
      };
    case GET_AUTHOR:
      const author = action.payload;

      return {
        ...state,
        author: author,
        loading2: false
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,

        loading2: true
      };
    default:
      return state;
  }
};
