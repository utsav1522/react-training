/**
 * Create a React component that fetches data from a public API (e.g., JSONPlaceholder) u
 * sing Axios and displays it on the page.
 */

import axios from "axios";
import { useEffect, useState } from "react";
import { urlLink, buttonStyle, correctUrl } from "./config";

const FetchDataFive = () => {
  const [url, setUrl] = useState(urlLink);
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(url);
      if (response.status !== 200) {
        console.log(error.message);
        throw response;
      } else {
        console.log(response.data);
        setResponseData(response.data);
        console.log("Reponse Data: ", responseData);
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return (
    <>
      <div>
        {error !== "" ? (
          <div
            style={{
              color: "red",
            }}
          >
            {error.message}
            <div
              style={{
                width: "100vw",
              }}
            >
              <button
                style={buttonStyle}
                onClick={() => {
                  setUrl(correctUrl);
                }}
              >
                Retry ...
              </button>
            </div>
          </div>
        ) : null}
        <ul>
          {responseData.map((ele) => {
            return (
              <>
                <l1>{ele.title}</l1> <br />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default FetchDataFive;
