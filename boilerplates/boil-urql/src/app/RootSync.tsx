import * as React from "react";
import { Switch, Route, Redirect } from "wouter";

import { Index } from "app/RoutesSync";
import routes from "app/consts/routes";

const Root = () => (
  <Switch>
    <Route path={routes.INDEX}>{() => <Index />}</Route>

    <Redirect to={routes.INDEX} />
  </Switch>
);

export default Root;
