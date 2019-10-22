/* eslint-disable react/no-danger */
import * as React from "react";
import { HelmetData } from "react-helmet";

import { themeMap, intlMap } from "server/data";

type Props = {
  root: string;
  helmet: HelmetData;
  styles: React.ReactNode;
  preloadable: React.ReactNode;
  loadable: React.ReactNode;
  color: string;
  themeId: string;
  localeId: string;
};

const Html = ({ root, helmet, styles, preloadable, loadable, color, themeId, localeId }: Props) => (
  <html {...helmet.htmlAttributes.toComponent()} lang={localeId}>
    <head>
      <meta charSet="utf-8" />
      {/* https://webkit.org/blog/7929/designing-websites-for-iphone-x/ */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content={color} />

      <link rel="manifest" href="/manifest.json?v=3" />

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      {preloadable}

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />

      <script src={`/generated/themes/${themeMap[themeId]}`} />
      <script src={`/generated/locales/${intlMap[localeId]}`} />

      {styles}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      {loadable}
    </body>
  </html>
);

export default Html;
