/**
 * 
 * a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.
 */
import { useEffect, useState, useRef } from "react";

const Notification = () => {
  let hasPageBeenRendered = useRef(false);
  let [message, setMessage] = useState("");
  let renderedEle;
  useEffect(() => {
    if (hasPageBeenRendered.current) {
      setTimeout(() => {
        console.log(message);
      }, 5000);
      hasPageBeenRendered.current = true;
    }
  }, [message]);

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      {renderedEle === undefined ? <></> : renderedEle}
    </>
  );
};

export default Notification;
