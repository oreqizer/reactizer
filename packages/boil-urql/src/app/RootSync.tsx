import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Index } from "app/RoutesSync";
import routes from "app/consts/routes";

const Root = () => (
  <Switch>
    <Route path={routes.INDEX} exact render={() => <Index />} />

    <Redirect to={routes.INDEX} />
  </Switch>
);

export default Root;
