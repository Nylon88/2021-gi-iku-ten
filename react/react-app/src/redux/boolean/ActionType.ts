import { LocationState } from "history"

export type State = {
  boolean: boolean;
}

export type Action = {
  type: string;
  payload: State;
}

export type Selector = {
  router: LocationState ;
  boolean: State;
}