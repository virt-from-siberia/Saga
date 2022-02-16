import { LOCATION_CHANGE } from "connected-react-router";
import { matchPath } from "react-router";

import {
  apply,
  call,
  takeEvery,
  put,
  take,
  select,
  fork,
} from "redux-saga/effects";

import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../../reducers/people/actions";
import { selectPeople } from "../../reducers/people/selectors";

import {
  getRouteConfig,
  MAIN_ROUTE,
  PEOPLE_DETAILS_ROUTE,
} from "../../../routes";

export function* loadPeopleDetails() {}

export function* loadPeopleList({ payload }) {
  const { page, search } = payload;

  const request = yield call(
    fetch,
    `https://swapi.dev/api/people/?page=${page}&search=${search}`
  );

  const data = yield apply(request, request.json);

  yield put({
    type: LOAD_USERS_SUCCESS,
    payload: data,
  });
}

export function* loadUserOneRoutEnter() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (
      matchPath(action.payload.location.pathname, getRouteConfig(MAIN_ROUTE))
    ) {
      const state = yield select(selectPeople);
      console.log("state", state);
      const { page, search } = state;

      yield put({
        type: LOAD_USERS,
        payload: {
          page,
          search,
        },
      });
    }

    const detailsPage = matchPath(
      action.payload.location.pathname,
      getRouteConfig(PEOPLE_DETAILS_ROUTE)
    );

    if (detailsPage) {
      console.log("detailsPage");
    }
  }
}

export default function* peopleSaga() {
  yield fork(loadUserOneRoutEnter);
  yield takeEvery(LOAD_USERS, loadPeopleList);
}
