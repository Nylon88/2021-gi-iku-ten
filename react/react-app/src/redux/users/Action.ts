import { Users } from "./ActionType";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: Omit<Users, "isSignedIn">) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      id: userState.id,
      username: userState.username,
      email: userState.email,
      password: userState.password
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
      email: "",
      password: ""
    }
  }
};