import { createStore } from "redux";
import { rootReducer } from "./Reducers";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // remove for PROD
);
