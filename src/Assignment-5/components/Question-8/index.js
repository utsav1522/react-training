import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";

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
  uri: "http://localhost:4000/",
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
