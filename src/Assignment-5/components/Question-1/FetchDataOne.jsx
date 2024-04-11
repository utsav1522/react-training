/**
 * Create a React component that fetches data from a public API (e.g., JSONPlaceholder)
 * and displays it on the page. Use the fetch function to make the request
 */

import React, { useEffect, useState } from "react";

const FetchDataOne = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    if (!response.ok) {
      setError(response);
    }
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((ele) => {
          return <li>{ele.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchDataOne;
