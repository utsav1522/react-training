//  a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen

import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <>
      <div className="buttonQuestion4">
        <h4
          style={{
            color: "white",
            marginRight: "auto",
            alignContent: "center",
          }}
        >
          {counter}
        </h4>
        {counter < 20 ? (
          <button
            onClick={() => {
              setCounter(++counter);
            }}
          >
            Increment
          </button>
        ) : (
          <></>
        )}
        {counter > 0 ? (
          <button
            onClick={() => {
              setCounter(--counter);
            }}
          >
            Decrement
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Counter;
