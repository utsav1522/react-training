import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSame, setIsSame] = useState(true);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (password === confirmPassword) {
      console.log("Password Matches");
      setIsSame(true);
    } else {
      setIsSame(false);
      console.error("password Fields do not match");
      return;
    }
    if (
      username === "utsav7011" &&
      password === "asdfghjkl" &&
      confirmPassword === "asdfghjkl"
    ) {
      navigate("/assignment-4/question-4/dashboard");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Signup Page</h1>
      {isSame === false ? (
        <p style={{ color: "red" }}> Password fields do not match</p>
      ) : (
        <></>
      )}
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleButtonClick}>SignUp</button>
    </div>
  );
};
export default SignUp;
