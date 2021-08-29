import { LocationState } from 'history'

export type Users = {
  isSignedIn: boolean;
  id: string | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  password: string;
}

export type SignInAndUp = {
  username: string | null | undefined;
  email: string;
  password: string;
  showMessage: (props: Message) => void
}

export type Action = {
  type: string;
  payload: Users;
}

export type Selector = {
  router: LocationState ;
  users: Users;
}

export type Message = {
  title: string,
  status: "info" | "warning" | "success" | "error",
}