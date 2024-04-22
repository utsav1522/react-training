import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import FetchDataEleven from "./FetchDataEleven";
import { urlLink } from "./config";
const client = new ApolloClient({
  uri: urlLink,
  cache: new InMemoryCache(),
});

const IndexEleven = () => {
  return (
    <ApolloProvider client={client}>
      <FetchDataEleven />
    </ApolloProvider>
  );
};

export default IndexEleven;
