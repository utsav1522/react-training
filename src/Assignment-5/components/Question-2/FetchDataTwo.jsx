/**
 * Implement error handling for the fetch request.
 * Display an error message if the request fails and provide a way for the user to retry the request.
 */
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../libs/helper";
import { errorUrl, correctUrl, styleButton, styleError } from "./config";

const FetchDataTwo = () => {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(false);

  const [url, setUrl] = useState(errorUrl);
  const processData = async () => {
    try {
      const response = await fetchData(url);
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
    processData();
  }, [url]);

  return (
    <div>
      {error !== "" ? (
        <div style={styleError}>
          <p>Error Code: {error.status}</p>

          <button
            style={styleButton}
            onClick={() => {
              console.log("Retrying....");
              setUrl(correctUrl);
              console.log("Url:", url);
              setError("");
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
