import { LocationState } from 'history'
import { AvatarFullConfig } from 'react-nice-avatar'

export type Users = {
  isSignedIn: boolean;
  id: string | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  password: string;
  avatar?: Required<AvatarFullConfig>;
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