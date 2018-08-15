import React from "react";
import Counter from "../index";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../configureStore";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const store = configureStore();

// instantiate enzyme adapter for testing
Enzyme.configure({ adapter: new Adapter() });

describe("Counter rendering", () => {
  it("renders witouht crashing", () => {
    mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  });
});
