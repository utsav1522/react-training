/**
 * Develop an HOC named withDataFetching 
 * that fetches data from an API and passes it as props to a component. 
 * Use this HOC to retrieve and display data in a component.
 */

import React from "react";
import withFetch from "./withFetch";

const Component = ({ data, error, loading }) => {
  if (loading) return <h1>Loadin.....</h1>;
  if (error !== "") return <div style={{ color: "red" }}>{error.message}</div>;
  return (
    <div>
      <ul>
        {data.map((ele, index) => {
          return <li key={index}>{ele.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default withFetch(Component);
