import authorsReducer from "./authors";
import booksReducer from "./books";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authorsState: authorsReducer,
  booksState: booksReducer
});
export default rootReducer;
