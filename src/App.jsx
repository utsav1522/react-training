import React from "react";
import { Outlet } from "react-router-dom";
import RouteComponent from "./RouteComponenet";
import Home from "./Home";
const App = () => {
  return (
    <div>
      <Home />
      <hr />
      <RouteComponent />
      <Outlet />
    </div>
  );
};

export default App;
