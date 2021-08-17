import { Dispatch } from "react";
import { skeletonAction } from "./Action";

export const skeleton = () => {
  return (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const boolean = state.boolean.boolean;
    dispatch(skeletonAction({boolean: !boolean}))
  }
}