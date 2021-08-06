import { push } from "connected-react-router";
import { Dispatch } from "redux";
import axios from "axios";

import auth from "../../firebase";
import { signInAction, signOutAction, signUpAction } from "./Action";
import { SignInAndUp } from "./ActionType";


export const signUp = (signUpData: SignInAndUp) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password, showMessage } = signUpData;
    const postData = {
      username,
      email,
      password
    }

    if (!isSignedIn) {
      // firebaseにユーザーを作成する
      await auth.createUserWithEmailAndPassword(email, password)
        .then(async () => {
          await axios.post("http://localhost:8000/v1/users", postData)
            .then(res => {
              // storeにユーザー情報を保存
              dispatch(signUpAction({
                id: res.data.id,
                username: res.data.username,
                email: res.data.email,
                password: res.data.password
              }))
              // ルートパスに移動
              dispatch(push("/"))
              // メッセージの表示
              showMessage({title: "正常に登録できました。", status: "success"});
            }
          ).catch(() => {
            showMessage({title: "ユーザーの保存に失敗しました。もう一度お試しください。", status: "error"})
          })
        }
        ).catch((error) => {
          // エラーメッセージの表示
          if (error.code === "auth/email-already-in-use") {
          showMessage({title: "このメールアドレスは既に使われています。", status: "error"});
        } else if (error.code === "auth/weak-password") {
          showMessage({title: "パスワードは6文字以上にしてください。", status: "error"});
        } else {
          showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"});
        }
      })
    }
  }
}

export const signIn = (signInData: Omit<SignInAndUp, "username">) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { email, password, showMessage } = signInData;
    const getData = {
      email,
      password
    }

    if (!isSignedIn) {
      // firebaseでログイン
      await auth.signInWithEmailAndPassword(email, password)
        .then(async () => {
          await axios.post(`http://localhost:8000/v1/users/login`, getData)
            .then(res => {
              // storeにユーザー情報を保存
              dispatch(signInAction({
                id: res.data.id,
                username: res.data.username,
                email: res.data.email,
                password: res.data.password
              }))
              // ルートパスに移動
              dispatch(push("/"))
              // メッセージの表示
              showMessage({title: "正常にログインできました。", status: "success"});
            }
          ).catch(() => {
            showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"})
          })
        }
      ).catch((error) => {
        // エラーメッセージの表示
        if (error.code === "auth/user-not-found") {
          showMessage({title: "ユーザーが見つかりません。", status: "error"})
        } else if (error.code === "auth/wrong-password") {
          showMessage({title: "パスワードが間違っています。", status: "error"})
        } else {
          showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"})
        }
      })
    }
  }
}

export const signOut = (signOutData: Pick<SignInAndUp, "showMessage">) => {
  return (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { showMessage } = signOutData;

    if (isSignedIn) {
      // firebaseログアウト
      auth.signOut()
      .then(() => {
        // signOutActionの呼び出し
        dispatch(signOutAction());
        // sign_inパスに移動
        dispatch(push("/sign_in"));
        // メッセージの表示
        showMessage({title: "正常にログアウトされました。", status: "success"});
      }).catch(() => {
        // エラーメッセージの表示
        showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"});
      })
    } else {
      // エラーメッセージの表示
      showMessage({title: "ログインしてください。", status: "error"});
    }
  }
}