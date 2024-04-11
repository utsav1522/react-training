/**
 * Implement error handling for the fetch request. 
 * Display an error message if the request fails and provide a way for the user to retry the request.
 */
import React, { useEffect, useState } from "react";

const FetchDataTwo = () => {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(false);
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/commentsaaa"
  );
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw response;
      } else {
        setResponseData(data);
        console.log(data);
      }
    } catch (response) {
      console.log(response);
      setError(response);
    } finally {
      setRetry(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [retry, url]);

  return (
    <div>
      {error !== "" ? (
        <div style={{ color: "red" }}>
          <p>Error Code: {error.status}</p>

          <button
            style={{ padding: "10px", margin: "10px", borderRadius: "10px" }}
            onClick={() => {
              console.log("Retrying....");
              setUrl("https://jsonplaceholder.typicode.com/comments");
              console.log("Url:", url);
              setError("")
              setRetry(true);
            }}
          >
            Retry Loading Data ...
          </button>
        </div>
      ) : (
        <div>
          <ul>
            {responseData.map((ele) => {
              return <li>{ele.body}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchDataTwo;
