/**
 * Create a React application that has multiple pages represented as components.
 * Implement lazy loading for these components using React's lazy and Suspense features.
 * When a user navigates to a particular page, the component should be loaded lazily,
 * improving the application's initial loading time.
 */

import React from "react";
import RouteComponent from "./RouteComponent";
import { Link } from "react-router-dom";

const style = {
  margin: "10px",
  color: "white",
  textDecoration: "none",
};
function IndexOne() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h1>Question - 1 </h1>
        <div>
          <Link style={style} to={"/"}>
            {" "}
            Home
          </Link>
          <Link style={style} to={"/about"}>
            About
          </Link>
          <Link style={style} to={"/contact"}>
            Contact
          </Link>
          <Link style={style} to={"/login"}>
            Login
          </Link>
        </div>
      </div>

      <RouteComponent />
    </>
  );
}

export default IndexOne;
