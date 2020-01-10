/* eslint-disable react/no-danger */
import * as React from "react";
import { HelmetData } from "react-helmet";

import { themeMap, localeMap } from "_server/data";

type Props = {
  root: string;
  helmet: HelmetData;
  styles: React.ReactNode;
  data: string;
  preloadable: React.ReactNode;
  loadable: React.ReactNode;
  themeId: string;
  localeId: string;
};

const Html = ({ root, helmet, styles, data, preloadable, loadable, themeId, localeId }: Props) => (
  <html {...helmet.htmlAttributes.toComponent()} lang={localeId}>
    <head>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
      {helmet.style.toComponent()}

      <link href={process.env.API_URL} rel="preconnect" />

      <link rel="preload" href={`/generated/themes/${themeMap[themeId]}`} as="script" />
      <link rel="preload" href={`/generated/locales/${localeMap[localeId]}`} as="script" />
      {preloadable}

      {styles}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      <script dangerouslySetInnerHTML={{ __html: `window.__URQL__ = ${data};` }} />

      <script src={`/generated/themes/${themeMap[themeId]}`} />
      <script src={`/generated/locales/${localeMap[localeId]}`} />
      {loadable}
    </body>
  </html>
);

export default Html;
