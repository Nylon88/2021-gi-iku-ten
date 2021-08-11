import * as Actions from "./Action"
import { initialState } from "../store/InitialState"
import { Action } from "./ActionType"

export const SearchPaperReducer = (state = initialState.searchPapers, action: Action) => {
  switch (action.type) {
    case Actions.SEARCH_PAPER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}