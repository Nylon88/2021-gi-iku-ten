import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Page404 } from "../pages/Page404";
import { searchPaper } from "../pages/searchPaper";
import { UserLogin } from "../pages/UserLogin";
import { UserRegistration } from "../pages/UserRegistration";
import { UserShow } from "../pages/UserShow";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={searchPaper} />
      <Route exact path="/sign_up" component={UserRegistration} />
      <Route exact path="/sign_in" component={UserLogin} />
      <Route path="/users/:id" component={UserShow} />
      <Route path="/*" component={Page404} />
    </Switch>
  )
})