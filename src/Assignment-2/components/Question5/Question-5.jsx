/**
 * a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.

 */

import { useState } from "react";

const CounterWithStep = () => {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(1);
  return (
    <>
      <p>{counter}</p>
      <input
        type="number"
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps"
      />
      <button onClick={() => setCounter(counter + Number(steps))}>
        Increment
      </button>
      {counter > steps ? (
        <button onClick={() => setCounter(counter - steps)}>Decrement</button>
      ) : (
        <></>
      )}
    </>
  );
};
export default CounterWithStep;
