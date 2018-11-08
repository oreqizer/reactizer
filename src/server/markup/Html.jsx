// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import type { IntlRaw } from "client/records/Intl";
import type { Theme } from "client/records/Theme";
import type { Assets } from "../config";

type Props = {
  root: string,
  css: React.Node,
  assets: Assets,
  theme: Theme,
  intl: IntlRaw,
};

const Html = ({ root, css, assets, theme, intl }: Props) => (
  <html lang={intl.locale}>
    <head>
      <title>{theme.name}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <meta name="theme-color" content={theme.colors.primary} />

      {assets.vendor && <link rel="preload" href={assets.vendor.js} as="script" />}
      <link rel="preload" href={assets.bundle.js} as="script" />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__THEME__ = ${JSON.stringify(theme)};
            window.__INTL__ = ${JSON.stringify(intl)};
         `,
        }}
      />
      {css}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      {assets.vendor && <script src={assets.vendor.js} />}
      <script src={assets.bundle.js} />
    </body>
  </html>
);

export default Html;
