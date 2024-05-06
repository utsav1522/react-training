import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const BOOKS = gql`
  query getTracks {
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

const FetchDataEight = () => {
  console.log("console");
  const { loading, error, data } = useQuery(BOOKS);
  console.log(error, "error");
  console.log(loading, "Loading");
  console.log(data);

  return (
    <>
      <ul>
        <h1>Question - 8</h1>
        {data?.getBooks.map((ele, index) => {
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
    </>
  );
};

export default FetchDataEight;
