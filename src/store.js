import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { schemaReducer } from "./reducers";

export default () =>
  createStore(schemaReducer, applyMiddleware(thunkMiddleware, logger));
