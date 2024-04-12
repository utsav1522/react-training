import React from "react";
import { Outlet } from "react-router-dom";
const OutletComponent = () => {
  return (
    <div>
      <h2>Question - 4</h2>
      <Outlet />
    </div>
  );
};

export default OutletComponent;
