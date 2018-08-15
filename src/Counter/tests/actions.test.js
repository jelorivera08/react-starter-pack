import Actions from "../actions";
const Types = Actions.Types;
const Creators = Actions.Creators;

describe("test actions", () => {
  it("has a type of increment", () => {
    const expected = {
      type: Types.INCREMENT
    };
    expect(Creators.increment()).toEqual(expected);
  });

  it("has a type of decrement", () => {
    const expected = {
      type: Types.DECREMENT
    };
    expect(Creators.decrement()).toEqual(expected);
  });

  it("has a type of asynchronous increment", () => {
    const expected = {
      type: Types.ASYNC_INCREMENT
    };
    expect(Creators.asyncIncrement()).toEqual(expected);
  });

  it("has a type of asynchronous decrement", () => {
    const expected = {
      type: Types.ASYNC_DECREMENT
    };
    expect(Creators.asyncDecrement()).toEqual(expected);
  });
});
