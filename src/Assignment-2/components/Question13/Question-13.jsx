/**
 * 
 * two components: Parent and Child.
In the Parent component, maintain a count state.
Pass a callback function from the Parent to the Child that increments the count.
Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
Display the count in the Child component.
Implement a button in the Child component that resets the count to zero when clicked.

 */

import React, { useCallback, useState } from "react";
import Child from "./Question-13-Child.jsx";

export const CountContext = React.createContext();

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Child
        countValue={count}
        handleIncrementClick={increment}
        handleResetClick={reset}
      />
    </>
  );
};
export default Parent;
