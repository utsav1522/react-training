import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1> You are on Home Page</h1>
      <Link to="/sign-up">Sign-up</Link>
    </div>
  );
};

export default Home;
