/* eslint-disable react/no-danger */
import * as React from "react";

import { SENTRY_CLIENT, ENVIRONMENT, PRODUCTION } from "server/config";

const script = `
  window.__SENTRY__ = {
    dsn: "${SENTRY_CLIENT}",
    debug: ${String(!PRODUCTION)},
    environment: "${ENVIRONMENT}",
  };
`;

const Sentry = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default Sentry;
