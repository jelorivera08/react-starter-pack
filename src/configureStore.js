import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run;

  return store;
};

export default configureStore;
