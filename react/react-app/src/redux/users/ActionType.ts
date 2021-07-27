export type Users = {
  isSignedIn: boolean;
  id: number;
  username: string;
  email: string;
  password: string;
}

export type Action = {
  type: string;
  payload: Users;
}