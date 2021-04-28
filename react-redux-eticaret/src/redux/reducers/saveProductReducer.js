import * as actionTypes from "../actions/actionTypes";
import initialsState from "./initialsState";

export default function savePrductReducer(
  state = initialsState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
