/**
 * two components: a parent component that acts as a provider and a child component that consumes the context.
Create a context to manage a user's authentication status (logged in or out).
Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."


 */

import React, { useState } from "react";
import Child from "./Child";

export const AuthenticationContext = React.createContext();
export const ThemeContext = React.createContext();

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState();
  return (
    <AuthenticationContext.Provider
      value={{ loginStatus: isLoggedIn, setLoginStatus: setIsLoggedIn }}
    >
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Child />
      </ThemeContext.Provider>
    </AuthenticationContext.Provider>
  );
};
export default Parent;
