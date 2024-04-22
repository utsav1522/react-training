/**
 * Create a React component that fetches data from a public API (e.g., JSONPlaceholder)
 * and displays it on the page. Use the fetch function to make the request
 */
import {url} from "./config";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../libs/helper";
const FetchDataOne = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData(url);
      const data = await response.json();
      if (!response.ok) {
        console.log(response);
        setError(response);
      }
      setData(data);
    };
    fetch();
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
