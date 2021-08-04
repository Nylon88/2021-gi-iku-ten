import { push } from "connected-react-router";
import { Dispatch } from "redux";
import auth from "../../firebase";
import { useMessage } from "../../hooks/useMessage";

import { signInAction, signUpAction } from "./Action";
import { Users } from "./ActionType";


export const signUp = (signUpData: Omit<Users, "isSignedIn" | "id">) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password } = signUpData;
    const { showMessage } = useMessage();

    if (!isSignedIn) {
      // firebaseにユーザーを作成する
      await auth.createUserWithEmailAndPassword(email, password);
      // storeにユーザー情報を保存
      dispatch(signUpAction({
        id: 1,
        username,
        email,
        password
      }))
      // ルートパスに移動
      dispatch(push("/"))
      // メッセージの表示
      showMessage({title: "正常に登録できました。", status: "success"});
    }
  }
}

export const signIn = (signInData: Omit<Users, "isSignedIn" | "id">) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password } = signInData;

    if (!isSignedIn) {
      // firebaseでログイン
      await auth.signInWithEmailAndPassword(email, password)
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