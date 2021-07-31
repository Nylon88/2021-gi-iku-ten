import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { UserRegistration } from "../pages/UserRegistration";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/sign_up" component={UserRegistration} />
    </Switch>
  )
})