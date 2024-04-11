import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./indexPage";
function Home() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginStatus, setLoginStatus } = useContext(LoginContext);

  const authenticate = (username, password) => {
    if (username === "utsav7011" && password === "asdfghjkl") {
      localStorage.setItem("isAuthneticated", "true");
      setLoginStatus(true);
      navigate("/about");
    } else {
      localStorage.setItem("isAuthneticated", "false");
      navigate("/login-failed");
    }
  };
  return (
    <div
      style={{
        alignContent: "center",
        margin: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: " 2px outset white",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>This is the Home Page </h2>
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
      </div>
    </div>
  );
}

export default Home;
