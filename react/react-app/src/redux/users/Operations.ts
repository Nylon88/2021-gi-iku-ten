import { push } from "connected-react-router";
import { Dispatch } from "redux";

import { signInAction } from "./Action";
import { Users } from "./ActionType";

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