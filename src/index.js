import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import rootSagas from "./sagas";
import Counter from "./Counter/Loadable";
import configureStore from "./configureStore";

const store = configureStore();

rootSagas(store);
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
