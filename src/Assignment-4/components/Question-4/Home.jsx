/**
 * Build a registration form with two password fields. 
 * Implement controlled components for both password inputs. 
 * Add a validation rule to ensure that the two passwords match before allowing the form submission.


 */

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Question 4 - Registeration Form</h1>
      <h1> You are on Home Page</h1>
      <Link to="/sign-up">Sign-up</Link>
    </div>
  );
};

export default Home;
