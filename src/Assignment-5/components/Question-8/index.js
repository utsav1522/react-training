import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import React from "react";

import FetchDataEight from "./FetchDataEight";
import DisplayLocations from "./Temp";

const client = new ApolloClient({
  // uri: "https://geodb-cities-graphql.p.rapidapi.com/",
  // uri: "http://localhost:4000",
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

function IndxQuestionSix() {
  return (
    <ApolloProvider client={client}>
      <FetchDataEight />
    </ApolloProvider>
  );
}

export default IndxQuestionSix;
