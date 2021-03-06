import { Users } from "./ActionType";

export const SIGN_UP = "SIGN_UP";
export const signUpAction = (userState: Omit<Users, "isSignedIn" | "password">) => {
  return {
    type: "SIGN_UP",
    payload: {
      isSignedIn: true,
      id: userState.id,
      username: userState.username,
      email: userState.email,
      avatar: userState.avatar
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      id: "",
      username: "",
      email: ""
    }
  }
};