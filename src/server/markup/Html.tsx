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
  themeId: string;
  localeId: string;
};

const Html = ({ root, helmet, styles, preloadable, loadable, themeId, localeId }: Props) => (
  <html {...helmet.htmlAttributes.toComponent()} lang={localeId}>
    <head>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      <link rel="preload" href={`/generated/themes/${themeMap[themeId]}`} as="script" />
      <link rel="preload" href={`/generated/locales/${intlMap[localeId]}`} as="script" />
      {preloadable}

      {styles}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      <script src={`/generated/themes/${themeMap[themeId]}`} />
      <script src={`/generated/locales/${intlMap[localeId]}`} />
      {loadable}
    </body>
  </html>
);

export default Html;
