/**
 * Create a React component with an input field.
 * Implement it as a controlled component where the input value is controlled by the component's state.
 * When the user types into the input field, the component's state should update accordingly.
 */

import React, { useState } from "react";
import Button from "@mui/material/Button";

const Question1 = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <label
        style={{
          margin: "10px",
        }}
      >
        Enter the text:
      </label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>Text Entered by User: {input}</p>
      <Button variant="outlined" color="success" onClick={() => setInput("")}>
        Reset Input Feild
      </Button>
    </>
  );
};

export default Question1;
