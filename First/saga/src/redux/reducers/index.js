import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const initialState = {};

export function appReducer(state = initialState, action) {
  return state;
}

const rootRducer = combineReducers({
  app: appReducer,
  history: connectRouter(history),
});

export default rootRducer;
