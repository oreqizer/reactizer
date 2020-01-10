import { Client, dedupExchange, cacheExchange, fetchExchange, ssrExchange } from "urql";

import * as token from "app/services/auth/token";

const ssrCache = ssrExchange({
  initialState: window.__URQL__,
});

const client = new Client({
  url: String(process.env.API_URL),
  fetchOptions: () => ({
    headers: {
      Authorization: token.load() || "",
    },
  }),
  exchanges: [
    dedupExchange,
    cacheExchange,
    // Put the exchange returned by calling ssrExchange after your cacheExchange,
    // but before any asynchronous exchanges like the fetchExchange:
    ssrCache,
    fetchExchange,
  ],
});

export default client;
