import counterSaga from "./Counter/saga";

const rootSagas = store => {
  store.runSaga(counterSaga);
};

export default rootSagas;
