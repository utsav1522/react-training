/**
 * 
 * a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.
 */
import { useEffect, useState } from "react";

const useDebounceValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);
  return debouncedValue;
};

const Notification = () => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const debounceSearchTerm = useDebounceValue(message, 1000);

  useEffect(() => {
    setTimeout(() => setShow(false), 5000);
    setShow(true);
  }, [debounceSearchTerm]);

  return (
    <>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        value={message}
      />

      {show === true ? <div>{message}</div> : <></>}
    </>
  );
};

export default Notification;
