import { combineReducers } from "redux";
import { homesReducer } from "./homesReducer";
import { usersReducer } from "./usersReducer";
import { tooglesReducer } from "./tooglesReducer";

const reducers = combineReducers({
  homesReducer,
  usersReducer,
  tooglesReducer,
});

export default reducers;
