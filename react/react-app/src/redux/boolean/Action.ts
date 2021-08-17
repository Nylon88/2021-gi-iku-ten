import { State } from "./ActionType";

export const SKELETON = "SKELETON";
export const skeletonAction = (state: State) => {
  return {
    type: "SKELETON",
    payload: {
      boolean: state.boolean
    }
  }
};