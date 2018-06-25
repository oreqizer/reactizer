// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import type { Intl } from "client/records/Intl";
import type { Theme } from "client/records/Theme";
import type { Assets } from "../config";

const globalCss = `
  body {
    color: #212121;
    font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02em;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

type Props = {
  root: string,
  css: React.Node,
  assets: Assets,
  theme: Theme,
  intl: Intl,
};

const Html = (props: Props) => (
  <html lang={props.intl.locale}>
    <head>
      <title>{props.theme.name}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <meta name="theme-color" content={props.theme.colors.primary} />

      {props.assets.vendor && <link rel="preload" href={props.assets.vendor.js} as="script" />}
      <link rel="preload" href={props.assets.bundle.js} as="script" />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__THEME__ = ${JSON.stringify(props.theme)};
            window.__INTL__ = ${JSON.stringify(props.intl)};
         `,
        }}
      />
      {props.css}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: props.root }} />

      {props.assets.vendor && <script src={props.assets.vendor.js} />}
      <script src={props.assets.bundle.js} />
    </body>
  </html>
);

export default Html;
