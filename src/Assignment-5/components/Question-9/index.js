import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ClientNine from "./ClientNine";
import { urlLink } from "./config";
const IndexNine = () => {
  const client = new ApolloClient({
    uri: urlLink,
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <ClientNine />
      </ApolloProvider>
    </>
  );
};
export default IndexNine;
