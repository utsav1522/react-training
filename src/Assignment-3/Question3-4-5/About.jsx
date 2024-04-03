import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h2>This is the About Page </h2>
      <Link
        style={{
          color: "white",
          marginRight: "10px",
          textDecoration: "none",
        }}
        to="/dashboard"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default About;
