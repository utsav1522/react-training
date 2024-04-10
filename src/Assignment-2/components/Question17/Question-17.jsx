/**
 * 
 *  a custom hook named useClipboard for copying text to the clipboard.
Implement a useClipboard hook that takes a text value as a parameter.
Use the document.execCommand API to copy the provided text to the clipboard.
Return a success status and methods to trigger the copying action.
Develop a component that uses the useClipboard hook to provide a copy button for text.
 */

import useClipboard from "./Question-17-helper";

const Clipboard = ({ text }) => {
  const [input, setInput, copyText, resetInput] = useClipboard("");

  return (
    <>
      <input
        id="inputFeild"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (input.length > 0) {copyText();}
          resetInput();
        }}
      >
        Copy text
      </button>
    </>
  );
};
export default Clipboard;
