import { fromJS } from "immutable";
import { createReducer } from "reduxsauce";
import Actions from "./actions";

const INITIAL_STATE = fromJS({
  count: 0
});

const increment = state =>
  state.merge({
    count: ++state.toJS().count
  });

const decrement = state =>
  state.merge({
    count: --state.toJS().count
  });

const Types = Actions.Types;

const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement
});

export default reducer;
