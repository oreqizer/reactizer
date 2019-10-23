/* eslint-disable react/no-danger */
import * as React from "react";
import { HelmetData } from "react-helmet";
import path from "path";
import fsx from "fs-extra";

import { themeMap, intlMap } from "server/data";
import Favicon from "server/markup/scripts/Favicon";
import Sentry from "server/markup/scripts/Sentry";

const CSS_NORMALIZE = fsx.readFileSync(
  path.resolve(__dirname, "../../../node_modules/normalize.css/normalize.css"),
);

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
      <Favicon />

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      {preloadable}

      <Sentry />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />

      <style dangerouslySetInnerHTML={{ __html: String(CSS_NORMALIZE) }} />
      {styles}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      <script defer src={`/generated/themes/${themeMap[themeId]}`} />
      <script defer src={`/generated/locales/${intlMap[localeId]}`} />
      {loadable}
    </body>
  </html>
);

export default Html;
