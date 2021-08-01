import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { searchPaper } from "../pages/searchPaper";
import { UserRegistration } from "../pages/UserRegistration";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={searchPaper} />
      <Route exact path="/sign_up" component={UserRegistration} />
    </Switch>
  )
})