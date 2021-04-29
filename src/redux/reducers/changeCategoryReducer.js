import * as actionTypes from "../actions/actionTypes";
import initialsState from "./initialsState";

export default function changeCategoryReducer(
  state = initialsState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
