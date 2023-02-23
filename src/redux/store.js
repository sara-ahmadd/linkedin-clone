import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import reduxThunk from "redux-thunk";
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);
