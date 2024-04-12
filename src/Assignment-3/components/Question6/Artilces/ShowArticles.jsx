import React from "react";
import { Outlet } from "react-router-dom";
const ShowArticles = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ShowArticles;
