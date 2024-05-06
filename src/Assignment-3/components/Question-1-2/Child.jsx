import React, { useContext, useState } from "react";
import { AuthenticationContext, ThemeContext } from "./Parent";
const Child = () => {
  const { loginStatus, setLoginStatus } = useContext(AuthenticationContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const lightStyle = {
    height: "100%",
    padding: "20px",
    backgroundColor: "white",
    color: "black",
  };

  const darkStyle = {
    padding: "20px",
    height: "100%",
    backgroundColor: "rgb(50, 50, 50)",
    color: "white",
  };

  const authenticate = (username, password) => {
    if (username === "utsav7011" && password === "asdfghjkl") {
      setLoginStatus(true);
    }
  };
  return (
    <>
      {loginStatus === false ? (
        <>
          <h1>Please Log in ...</h1>
          <input
            placeholder="Enter Username ..."
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="Enter Password ..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              authenticate(username, password);
            }}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <div style={theme === "light" ? lightStyle : darkStyle}>
            <h4>Logged in as : {username}</h4>
            <button onClick={() => setTheme("light")}>
              Change to light Theme
            </button>
            <button onClick={() => setTheme("dark")}>
              Change to dark Theme
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Child;
