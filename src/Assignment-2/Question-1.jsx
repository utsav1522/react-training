/**
 * 
 * 
 *  a functional component called Counter.
Inside the component, use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
When the user clicks on the buttons, update the count state accordingly.


 */

import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <>
      <div className="buttonQuestion4">
        <h4
          style={{
            color: "black",
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
