/**
 * Create a component with controlled input field and a button.
 * When the user enters a specific value into the input (e.g., "show"),
 * a new component should be rendered below the input,
 * displaying a message. Otherwise, nothing should be displayed.
 */

import { useState } from "react";

const Question3 = () => {
  const [input, setInput] = useState("");
  return (
    <>
    <label>Enter the code to display the passcode: </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input === "show" ? <p>The code to the treasure is "abcd"</p> : <></>}
    </>
  );
};
export default Question3;
