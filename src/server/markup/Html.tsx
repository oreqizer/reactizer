/* eslint-disable react/no-danger */
import * as React from "react";

type Props = {
  root: string;
  styles: React.ReactNode;
  preloadable: React.ReactNode;
  loadable: React.ReactNode;
  color: string;
  locale: string;
  themeFile: string;
  intlFile: string;
};

const Html = ({
  root,
  styles,
  preloadable,
  loadable,
  color,
  locale,
  themeFile,
  intlFile,
}: Props) => (
  <html lang={locale}>
    <head>
      <title>Reactizer</title>

      <meta charSet="utf-8" />
      {/* https://webkit.org/blog/7929/designing-websites-for-iphone-x/ */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <link rel="manifest" href="/manifest.json?v=3" />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="32x32"
        href="/images/icons/icon-32x32.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="16x16"
        href="/images/icons/icon-16x16.png"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon-180x180.png" />
      <meta name="theme-color" content={color} />
      {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}

      {preloadable}

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />

      <script src={`/generated/themes/${themeFile}`} />
      <script src={`/generated/locales/${intlFile}`} />

      {styles}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      {loadable}
    </body>
  </html>
);

export default Html;
