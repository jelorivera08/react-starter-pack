import { combineReducers } from "redux-immutable";
import count from "./Counter/reducer";

const rootReducer = combineReducers({
  count
});

export default rootReducer;
