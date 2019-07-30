import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Index } from "client/scenes/Routes";
import routes from "client/consts/routes";

const Root = () => (
  <Switch>
    <Route path={routes.INDEX} exact render={() => <Index />} />

    <Redirect to={routes.INDEX} />
  </Switch>
);

export default Root;
