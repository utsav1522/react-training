/**
 * Add a loading indicator (e.g., a spinner) to the component. 
 * Display it while the data is being fetched and hide it once the data is loaded.
 */

import React, { useEffect, useState } from "react";

function FetchDataThree() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
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
      fetchData();
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
}

export default FetchDataThree;
