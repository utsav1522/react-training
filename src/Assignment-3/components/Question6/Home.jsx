import React from "react";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>The endpoints are: </h2>
      <ul>
        <li>Show Item: /show-items</li>
        <li>Show Articles: /show-articles</li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
