/**
 * Add a loading indicator (e.g., a spinner) to the component.
 * Display it while the data is being fetched and hide it once the data is loaded.
 */

import React, { useEffect, useState } from "react";
import { fetchData } from "../../../libs/helper";
import { url } from "./config";

const FetchDataThree = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const processData = async () => {
    try {
      const response = await fetchData(url);
      const responseData = await response.json();
      if (!response?.ok) {
        throw response;
      } else {
        setData(responseData);
        setError("");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      processData();
    }, 3000);
  }, [error, data, loading]);

  return (
    <div>
      {loading === true ? <h1>Loading...</h1> : null}
      {error !== "" ? (
        <h1>Error code: {error.status}</h1>
      ) : (
        <div>
          {
            <ul>
              {data.map((ele) => {
                return <li>{ele.body}</li>;
              })}
            </ul>
          }
        </div>
      )}
    </div>
  );
};

export default FetchDataThree;
