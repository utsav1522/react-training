import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const WithAuth = (props) => {
    const [isloggedIn, setIsLoggedIn] = useState(false);
      
    return <Component {...props} />;
  };
  return WithAuth;
};

export default withAuth;
