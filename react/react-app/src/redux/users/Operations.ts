import { push } from "connected-react-router";
import { Dispatch } from "redux";
import axios from "axios";

import auth from "../../firebase";
import { signOutAction, signUpAction } from "./Action";
import { SignInAndUp } from "./ActionType";
import { API_ENDPOINT } from "../../template/apiEndpoint";
import { avatarConfig } from "../../template/niceAvatar";
import { genConfig } from "react-nice-avatar";


export const signUp = (signUpData: SignInAndUp) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    const { username, email, password, showMessage } = signUpData;

    if (!isSignedIn) {
      // firebaseにユーザーを作成する
      await auth.createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        const uid = result.user?.uid
        await axios.post(`${API_ENDPOINT}/users`, {uid})
        .then(async () => {
          await result.user?.updateProfile({displayName: username})
          .then(() => {
            // ログインユーザー情報を取得
            result.user?.providerData.forEach((profile) => {
              const number = profile?.displayName?.length ? profile?.displayName?.length % 6 : 0
              // storeにユーザー情報を保存
              dispatch(signUpAction({
                id: profile?.uid,
                username: profile?.displayName,
                email: profile?.email,
                avatar: genConfig(avatarConfig[number])
              }))
            })
            // ルートパスに移動
            dispatch(push("/"))
            // メッセージの表示
            showMessage({title: "正常に登録できました。", status: "success"});
          })
          .catch(() => {
            showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"});
          })
        })
        .catch(async () => {
          await auth.currentUser?.delete();
          showMessage({title: "ユーザーの保存に失敗しました。もう一度お試しください。", status: "error"})
        })
      })
      .catch((error) => {
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

    if (!isSignedIn) {
      // firebaseでログイン
      await auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        // ログインユーザー情報を取得
        result.user?.providerData.forEach((profile) => {
          const number = profile?.displayName?.length ? profile?.displayName?.length % 6 : 0
        // storeにユーザー情報を保存
          dispatch(signUpAction({
            id: profile?.uid,
            username: profile?.displayName,
            email,
            avatar: genConfig(avatarConfig[number])
          }))
        });
        // ルートパスに移動
        dispatch(push("/"))
        // メッセージの表示
        showMessage({title: "正常にログインできました。", status: "success"});
      })
      .catch((error) => {
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
      })
      .catch(() => {
        // エラーメッセージの表示
        showMessage({title: "不明なエラーです。もう一度お試しください。", status: "error"});
      })
    } else {
      // エラーメッセージの表示
      showMessage({title: "ログインしてください。", status: "error"});
    }
  }
}