/**
 * 
 * a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.

 */

import React, { useState } from "react";
import LanguageSelector from "./Question-10-helper";

export const LanguageContext = React.createContext();

const LanguageTranslate = () => {
  const [language, setLanguage] = useState("English");
  return (
    <LanguageContext.Provider
      value={{ lang: language, setLanguage: setLanguage }}
    >
      <LanguageSelector />

      <p>Laguage is : {language}</p>
      <div>
        {language === "English" ? (
          <p>Hello in English</p>
        ) : language === "Spanish" ? (
          <p>hola en ingles</p>
        ) : language === "Italian" ? (
          <p>Ciao in inglese</p>
        ) : language === "German" ? (
          <p>Hallo auf Englisch</p>
        ) : (
          <></>
        )}
      </div>
    </LanguageContext.Provider>
  );
};

export default LanguageTranslate;
