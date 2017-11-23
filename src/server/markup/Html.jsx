/* @flow */
/* eslint-disable react/no-danger */
import * as React from "react";

import type { Assets } from "../config";

type Props = {
  root: string,
  sheet: React.Element<*>[],
  assets: Assets,
};

const Html = (props: Props) => (
  <html lang="en">
    <head>
      <title>Reactizer</title>
      <meta charSet="utf-8" />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      {props.sheet}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: props.root }} />

      <script src={props.assets.vendor.js} />
      <script src={props.assets.bundle.js} />
    </body>
  </html>
);

export default Html;
