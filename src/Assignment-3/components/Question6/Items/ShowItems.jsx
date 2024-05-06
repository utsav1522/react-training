import React from "react";
import { Outlet } from "react-router-dom";
const ShowItems = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ShowItems;
