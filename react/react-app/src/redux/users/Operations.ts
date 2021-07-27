import { push } from "connected-react-router";
import { signInAction } from "./Action";
import { Users } from "./ActionType";

export const signIn = (signInData: Omit<Users, "isSignedIn">) => {
  return async (dispatch: any, getState:any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      dispatch(signInAction({
        id: 1,
        username: signInData.username,
        email: "test@email.com",
        password: "password"
      }))
      dispatch(push("/test"))
    }
  }
}