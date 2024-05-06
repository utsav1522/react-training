/**Construct a select dropdown menu with multiple options.
 * Control the selected option using state.
 * When an option is selected, display a message showing the selected value.
 */

import React, { useState } from "react";
const Dropdown = () => {
  const language = ["English", "Hindi", "German", "French", "Italian"];
  const [langUpdate, setLangUpdate] = useState(language[0]);

  return (
    <>
     <h1>Question 5 - Dropdown </h1>
      <select
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        }}
        onChange={(e) => {
          setLangUpdate(e.target.value);
        }}
      >
        {language.map((ele) => {
          return (
            <>
              <option value={ele}>{ele}</option>
            </>
          );
        })}
      </select>
      <p>The Language set is : {langUpdate}</p>
    </>
  );
};

export default Dropdown;
