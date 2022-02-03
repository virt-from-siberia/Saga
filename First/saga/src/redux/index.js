import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import rootRducer from "./reducers";
import rootSaga from "./sagas";
import { history } from "./reducers";

const sagaMiddleware = createSagaMiddleware({});
const store = createStore(
  rootRducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
);
sagaMiddleware.run(rootSaga);

export default store;
