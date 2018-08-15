import { takeEvery, all, fork, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import counterActions from "./actions";

const watchCounter = () =>
  function* watch() {
    yield takeEvery(counterActions.Types.ASYNC_INCREMENT, asyncIncrement);
    yield takeEvery(counterActions.Types.ASYNC_DECREMENT, asyncDecrement);
  };

function* asyncDecrement() {
  yield delay(1000);
  yield put(counterActions.Creators.decrement());
}

function* asyncIncrement() {
  yield delay(1000);
  yield put(counterActions.Creators.increment());
}

export default function* counterSagas() {
  yield all([fork(watchCounter())]);
}
