import reducer from "../reducer";
import { fromJS } from "immutable";
import Actions from "../actions";

describe("test reducers", () => {
  const INITIAL_STATE = fromJS({
    count: 0
  });

  it("count state to increment", () => {
    expect(reducer(INITIAL_STATE, Actions.Creators.increment()).toJS()).toEqual(
      {
        ...INITIAL_STATE.toJS(),
        count: 1
      }
    );
  });

  it("count state to decrement", () => {
    expect(reducer(INITIAL_STATE, Actions.Creators.decrement()).toJS()).toEqual(
      {
        ...INITIAL_STATE.toJS(),
        count: -1
      }
    );
  });
});
