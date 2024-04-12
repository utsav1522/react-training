/**
 * Fetch a large dataset from an API and implement pagination.
 * Display a limited number of items per page and provide navigation controls to load more pages of data.
 */

import React, { useEffect, useState } from "react";

const FetchDataFour = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState({
    min: 0,
    max: 10,
  });
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw response;
      } else {
        setData(responseData);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [loading]);
  return (
    <div>
      {loading === true ? <h1>Loading...</h1> : null}
      {error !== "" ? (
        <h1>Error Code: {error.status}</h1>
      ) : loading === false ? (
        <div
          style={{
            padding: "10px",
            margin: "10px",
          }}
        >
          {data
            .filter((ele, index) => {
              if (ele.id > range.min && ele.id < range.max) return ele;
            })
            .map((ele, index) => {
              return <li>{ele.body}</li>;
            })}
          <div
            style={{
              width: "100vw",
              alignItems: "right",
              alignContent: "right",
            }}
          >
            {range.min >= 10 ? (
              <button
                style={{
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  const updateValue = {
                    min: range.min - 10,
                    max: range.max - 10,
                  };
                  setRange({ ...range, ...updateValue });
                  setLoading(true);
                }}
              >
                Prev Page
              </button>
            ) : null}
            {range.min} - {range.max}
            <button
              style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
              }}
              onClick={() => {
                const updateValue = {
                  min: range.min + 10,
                  max: range.max + 10,
                };
                setRange({ ...range, ...updateValue });
                setLoading(true);
              }}
            >
              Next Page
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FetchDataFour;
