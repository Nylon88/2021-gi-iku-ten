import * as Actions from "./Action"
import { initialState } from "../store/InitialState"
import { Action } from "./ActionType"

export const UsersReducer = (state = initialState.users, action: Action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
      case Actions.SIGN_OUT:
        return {
          ...state,
          ...action.payload
        }
    default:
      return state
  }
}