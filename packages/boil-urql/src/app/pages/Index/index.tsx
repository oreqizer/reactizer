import * as React from "react";
import { useQuery } from "urql";
import gql from "graphql-tag";

import { IndexQuery } from "__generated__/IndexQuery";

const query = gql`
  query IndexQuery {
    account {
      name
    }
  }
`;

const Index = () => {
  const [res] = useQuery<IndexQuery>({ query });

  if (res.fetching) {
    return <div>Loading...</div>;
  }

  if (res.error) {
    return <div>Oops</div>;
  }

  return <h1>Yo {res.data?.account?.name || "Anon"}</h1>;
};

export default Index;
