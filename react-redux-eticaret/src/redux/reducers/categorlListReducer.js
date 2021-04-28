import * as actionTypes from "../actions/actionTypes";
import initialsState from "./initialsState";

export default function changeCategoryReducer(
  state = initialsState.categories,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
