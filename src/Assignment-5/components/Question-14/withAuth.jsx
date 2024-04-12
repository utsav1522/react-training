import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const WithAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    const isAuthenticated = localStorage.getItem("login");

    if (isAuthenticated !== "true") {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };
};
export default WithAuth;
