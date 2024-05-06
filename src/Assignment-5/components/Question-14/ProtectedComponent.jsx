// ProtectedComponent.js

import React from "react";
import withAuth from "./withAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedComponent = (props) => {
  return (
    <div>
      {props.isAuthenticated === "true" ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default withAuth(ProtectedComponent);
