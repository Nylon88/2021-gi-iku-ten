import { push } from "connected-react-router";
import { Dispatch } from "redux";

import { signInAction, signUpAction } from "./Action";
import { Users } from "./ActionType";

export const signUp = (signUpData: Omit<Users, "isSignedIn" | "id">) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password } = signUpData;

    if (!isSignedIn) {
      dispatch(signUpAction({
        id: 1,
        username,
        email,
        password
      }))
      dispatch(push("/"))
    }
  }
}

export const signIn = (signInData: Omit<Users, "isSignedIn" | "id">) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password } = signInData;

    if (!isSignedIn) {
      dispatch(signInAction({
        id: 1,
        username,
        email,
        password
      }))
      dispatch(push("/"))
    }
  }
}