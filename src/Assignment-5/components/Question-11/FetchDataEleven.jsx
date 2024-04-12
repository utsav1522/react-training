import React from "react";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query getBooks {
    getBooks {
      id
      name
      pages
      genre
      price
      author {
        id
        name
      }
    }
  }
`;

const FetchDataEleven = () => {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  if (error) {
    console.log(error);
    return (
      <>
        <h1>{error}</h1>
      </>
    );
  }
  return (
    <div>
      <h1>Question-10</h1>
      <ul>
        {data?.getBooks?.map((ele, index) => {
          return (
            <>
              <p>============== Book {index + 1} ==============</p>
              <ul>
                <p>------------ Author Details ------------ </p>
                <l1>Id: {ele?.author?.id}</l1>
                <li>Name: {ele?.author?.name}</li>
                <p>------------ Book Details ------------ </p>
                <li>Id: {ele?.id}</li>
                <li>Name: {ele?.name}</li>
                <li>Genre: {ele?.genre}</li>
                <li>Page Count: {ele?.pages}</li>
                <li>Price: {ele?.price}</li>
              </ul>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchDataEleven;
