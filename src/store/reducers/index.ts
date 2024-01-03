import { combineReducers } from "redux";
import appReducer from "./app.reducer";

const createRootReducer = () =>
  combineReducers({
    app: appReducer,
  });

export default createRootReducer;
