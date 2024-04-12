import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ClientNine from "./ClientNine";

const IndexNine = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
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
