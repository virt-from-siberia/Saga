import { call, apply, takeEvery } from "redux-saga/effects";

function* loadBlogData() {
  const request = yield call(fetch, "https://swapi.dev/api/vehicles");
  const data = yield call([request, request.json]);

  console.log("blog data", data);
  return data;
}

export default function* pageLoaderSaga() {
  yield takeEvery("LOAD_BLOG_DATA", loadBlogData);
}
