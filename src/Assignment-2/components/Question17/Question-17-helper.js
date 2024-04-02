import { useState } from "react";

const useClipboard = (initalValue) => {
  const [input, setInput] = useState("");
  const reset = () => {
    setInput(initalValue);
  };
  const bind = {
    input,
    onchange: (e) => {
      window.navigator.clipboard.writeText(input);
      setInput(e.target.value);
    },
  };
  return [input, bind, reset];
};

export default useClipboard;
