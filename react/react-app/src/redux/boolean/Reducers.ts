import { initialState } from "../store/InitialState"
import * as Actions from "./Action"
import { Action } from "./ActionType"

export const BooleanReducer = (state = initialState.boolean, action: Action) => {
  switch (action.type) {
    case Actions.SKELETON:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}