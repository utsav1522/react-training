import React from "react";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h1>Welcome to Dashboard</h1>
        <div
          style={{
            display: "flex",

            padding: "10px",
            justifyContent: "space-around",
          }}
        >
          <Link
            style={{
              color: "white",
              marginRight: "10px",
              textDecoration: "none",
            }}
            to="/dashboard/profile"
          >
            Profile Section
          </Link>

          <Link
            style={{
              color: "white",
              marginRight: "10px",
              textDecoration: "none",
            }}
            to="/dashboard/settings"
          >
            Settings Section
          </Link>
          <Link
            style={{
              color: "white",
              marginRight: "10px",
              textDecoration: "none",
            }}
            to="/dashboard/innovations"
          >
            Innovations Section
          </Link>

          <Link
            style={{
              color: "white",
              marginRight: "10px",
              textDecoration: "none",
            }}
            to="/dashboard/quick-links"
          >
            Quick Links
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
