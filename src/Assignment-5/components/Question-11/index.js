import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import FetchDataEleven from "./FetchDataEleven";

const client = new ApolloClient({
  uri: "http://localhost:4000",
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
