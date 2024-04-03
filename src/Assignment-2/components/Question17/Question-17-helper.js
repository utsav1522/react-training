import { useState } from "react";

const useClipboard = (initalValue) => {
  const [input, setInput] = useState("");
  const reset = () => {
    setInput(initalValue);
  };
  const copyText = () => {
    window.navigator.clipboard.writeText(input);
  };

  return [input, setInput, copyText, reset];
};

export default useClipboard;
