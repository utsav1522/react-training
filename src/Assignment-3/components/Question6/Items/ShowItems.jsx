import React from "react";
import { Outlet } from "react-router-dom";
function ShowItems() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ShowItems;
