import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import { urlLink } from "./config";

import FetchDataEight from "./FetchDataEight";

// const headers = createHttpLink({
//   uri: "https://rapidapi.com/wirefreethought/api/geodb-cities-graphql",
//   headers: {
//     "x-rapidapi-key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
//     "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
//     "Content-Type": "application/json",
//   },
// });

const client = new ApolloClient({
  // link: headers,
  uri: urlLink,
  cache: new InMemoryCache(),
});

function IndxQuestionEight() {
  return (
    <ApolloProvider client={client}>
      <FetchDataEight />
    </ApolloProvider>
  );
}

export default IndxQuestionEight;
