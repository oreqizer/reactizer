import "isomorphic-unfetch";
import { Client, dedupExchange, cacheExchange, fetchExchange, Exchange } from "urql";

const getClient = (ssrCache: Exchange) =>
  new Client({
    url: String(process.env.API_URL),
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    // Needed for SSR
    suspense: true,
  });

export default getClient;
