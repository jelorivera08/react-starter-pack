import { createSelector } from "reselect";

const count = state => state.get("count");


export const makeCount = () =>
  createSelector(count, count => count.toJS().count);
