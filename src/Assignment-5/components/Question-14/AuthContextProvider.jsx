import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserAuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const navi = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [text, setText] = useState("Enter username and password");
  const handleSubmit = () => {
    if (
      username &&
      password &&
      username === "Monu" &&
      password === "Monu@123"
    ) {
      setLogin(true);
      setUsername("");
      setPassword("");
      setText("Please Login");
      navi("/assignment5/question14/home");
    } else {
      setText("Invalid Username or Password");
    }
  };
  return (
    <UserAuthContext.Provider
      value={{
        text,
        setText,
        username,
        password,
        setUsername,
        setPassword,
        login,
        setLogin,
        handleSubmit,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContextProvider;