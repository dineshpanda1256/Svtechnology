import { combineReducers } from "redux";
import user from "./userSlice";

const rootReducer = combineReducers({
  user: user,
});

export default rootReducer;
