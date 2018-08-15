import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  increment: ["count"],
  decrement: ["count"],
  asyncIncrement: ["count"],
  asyncDecrement: ["count"]
});

const Actions = {
  Types,
  Creators
};

export default Actions;
