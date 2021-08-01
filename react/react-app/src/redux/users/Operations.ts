import { push } from "connected-react-router";
import { Dispatch } from "redux";

import { signUpAction } from "./Action";
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