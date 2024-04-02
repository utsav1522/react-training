import { ThemeContext } from "./Question-9.jsx";
import { useContext } from "react";
const ThemeOptions = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <button onClick={() => theme.changeTheme("light")}>Light</button>
      <button onClick={() => theme.changeTheme("dark")}>Dark</button>
    </>
  );
};
export default ThemeOptions;
