import React from "react";
import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link
          to="/assignment-1"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Go to Assignment - 1
        </Link>
        <br />
        <Link
          to="/assignment-2"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Go to Assignment - 2
        </Link>
        <br />
        <Link
          to="/assignment-3"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Go to Assignment - 3
        </Link>
        <br />
        <Link
          to="/assignment-4"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Go to Assignment - 4
        </Link>
      </div>
    </>
  );
};

export default Home;
