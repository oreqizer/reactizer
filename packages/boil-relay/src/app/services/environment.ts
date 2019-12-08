import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
} from "react-relay-network-modern/node8";

const __DEV__ = process.env.NODE_ENV !== "production"; // eslint-disable-line no-underscore-dangle

const network = new RelayNetworkLayer([
  cacheMiddleware({
    size: 100, // Max 100 requests
    ttl: 60 * 5 * 1000, // 5 minutes
    clearOnMutation: true,
  }),
  urlMiddleware({
    url: process.env.API_URL || "",
  }),
  __DEV__ ? loggerMiddleware() : null,
  __DEV__ ? perfMiddleware() : null,
  errorMiddleware({
    logger: (err: Error) => {
      if (__DEV__) {
        // eslint-disable-next-line no-console, fp/no-unused-expression
        console.error(err);
      }
    },
  }),
  retryMiddleware({
    fetchTimeout: 10000,
    statusCodes: [500, 503, 504],
  }),
  authMiddleware({
    allowEmptyToken: true,
  }),
]);

const source = new RecordSource();
const store = new Store(source);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: Outdated typings
const environment = new Environment({ network, store });

export default environment;
