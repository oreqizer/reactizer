/* eslint-disable react/no-danger */
import * as React from "react";

const script = `
  window.__SENTRY__ = {
    dsn: "${process.env.SENTRY_CLIENT}",
    debug: ${String(process.env.NODE_ENV !== "production")},
    environment: "${process.env.ENV || "dev"}",
  };
`;

const Index = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default Index;
