import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, initialState, applyMiddleware(thunk))
    : createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
      );

export default store;
