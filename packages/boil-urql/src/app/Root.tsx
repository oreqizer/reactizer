/* eslint-disable react/no-danger */
import * as React from "react";
import { Switch, Route, Redirect } from "wouter";
import { Helmet } from "react-helmet";
// @ts-ignore: outdated types
import { useTheme } from "styled-components";
import { Normalize } from "styled-normalize";
import { useIntl } from "@reactizer/intl";
import { Theme } from "@reactizer/theme";

import { Index } from "app/Routes";
import routes from "app/consts/routes";

const Root = () => {
  const intl = useIntl();
  const theme: Theme = useTheme();

  return (
    <>
      <Helmet titleTemplate="%s | Reactizer" defaultTitle={`${intl.t(__("Home"))} | Reactizer`}>
        <html lang={intl.id} />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content={theme.colorProductNormal} />

        <link rel="apple-touch-icon" sizes="57x57" href="/head/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/head/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/head/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/head/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/head/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/head/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/head/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/head/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/head/apple-icon-180x180.png" />

        <link rel="manifest" href="/head/manifest.json?v=3" />

        <link rel="icon" type="image/png" sizes="192x192" href="/head/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/head/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/head/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/head/favicon-16x16.png" />

        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Helmet>

      <Normalize />

      <Switch>
        <Route path={routes.INDEX}>{() => <Index />}</Route>

        <Redirect to={routes.INDEX} />
      </Switch>
    </>
  );
};

export default Root;
