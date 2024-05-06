/**
 * 
 * a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.

 */

import React, { useState } from "react";
import ThemeOptions from "./Question-9-helper";

export const ThemeContext = React.createContext();
const lightTheme = {
  marginLeft: "10px",
  backgroundColor: "white",
  color: "black",
};

const darkTheme = {
  marginLeft: "10px",
  backgroundColor: "rgb(50, 50, 50)",
  color: "white",
};
const ThemeChanger = () => {
  let [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      <div style={theme === "light" ? lightTheme : darkTheme}>
        <ThemeOptions />
        <div>The theme is {theme}</div>
      </div>
    </ThemeContext.Provider>
  );
};
export default ThemeChanger;
