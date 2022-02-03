import { call, spawn, all } from "redux-saga/effects";

import loadBascData from "./initialSagas";
import pageLoaderSaga from "./pageLoader";

export default function* rootSaga() {
  const sagas = [loadBascData, pageLoaderSaga];

  const retrySagas = sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log("error");
        }
      }
    });
  });
  yield all(retrySagas);
}
