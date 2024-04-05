//  7.Create a functional component called Notification.
//  Use the useState hook to manage a state variable named message initialized to an empty string.
//  Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
//  Render the notification message in a <div> element.
//  After 5 seconds, clear the message to hide the notification.

import React, { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");
  const [messageui, setMessageui] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [messageui]);

  return (
    <div>
      <div>
        {" "}
        <h2> {show ? message : null} </h2>{" "}
      </div>
      <input
        value={message}
        placeholder="Enter Your message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            setMessageui(message);
            setShow(true);
          }}
        >
          Show Notificatio
        </button>
      </div>
    </div>
  );
};

export default Notification;
