import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import { History } from "history"

import { UsersReducer } from "../users/Reducers"
import { SearchPaperReducer } from "../search/Reducers"

export default function createStore(history: History) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      search: SearchPaperReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}