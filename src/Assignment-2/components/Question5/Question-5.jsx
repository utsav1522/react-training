/**
 * a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.

 */

import { useState } from "react";

const CounterWithStep = () => {
  const [counterAndSteps, setCounterAndSteps] = useState({
    counter: 0,
    steps: 1,
  });

  return (
    <>
      <p>{counterAndSteps.counter}</p>
      <input
        type="number"
        value={counterAndSteps.steps}
        onChange={(e) => {
          const updateValue = { steps: e.target.value };
          setCounterAndSteps({ ...counterAndSteps, ...updateValue });
          // setSteps(e.target.value)
        }}
        placeholder="Steps"
      />
      <button
        onClick={() => {
          const updateValue = {
            counter:
              Number(counterAndSteps.counter) + Number(counterAndSteps.steps),
          };
          setCounterAndSteps({ ...counterAndSteps, ...updateValue });
        }}
      >
        Increment
      </button>
      {counterAndSteps.counters > counterAndSteps.steps ? (
        <button
          onClick={() => {
            const updateValue = {
              counter:
                Number(counterAndSteps.counter) - Number(counterAndSteps.steps),
            };
            setCounterAndSteps({...counterAndSteps, ...updateValue});
          }}
        >
          Decrement
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
export default CounterWithStep;
