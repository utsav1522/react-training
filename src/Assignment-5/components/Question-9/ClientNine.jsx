/**
 * Q - 9 Create a React component that makes GraphQL queries to
 * retrieve a list of items (e.g., a list of books, movies, or products)
 * from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.
 */

/**
 * Extend the previous assignment to allow users to perform mutations,
 * such as adding, updating, or deleting items.
 * Implement a form and mutation queries to interact with the GraphQL API.
 */

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";

function ClientNine() {
  const [pageRange, setPagRange] = useState({
    min: 0,
    max: 10,
  });

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

  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>{error}</p>;
  console.log(data);

  return (
    <div>
      <h1>Question - 9</h1>

      <ul>
        {data?.getBooks
          .filter((ele, index) => {
            if (index > pageRange.min && index <= pageRange.max) return ele;
          })
          .map((ele, index) => {
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
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center"
      }}>
        {pageRange.min >= 10 ? (
          <button
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
            onClick={() => {
              const updateValue = {
                min: pageRange.min - 10,
                max: pageRange.max - 10,
              };
              console.log(pageRange);
              setPagRange({ ...pageRange, ...updateValue });
            }}
          >
            Prev Page
          </button>
        ) : null}
        <p>
          {pageRange.min} - {pageRange.max}
        </p>
        {pageRange.max < 100 ? (
          <button
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
            onClick={() => {
              const updateValue = {
                min: pageRange.min + 10,
                max: pageRange.max + 10,
              };
              console.log(pageRange);
              setPagRange({ ...pageRange, ...updateValue });
            }}
          >
            Next Page
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ClientNine;
