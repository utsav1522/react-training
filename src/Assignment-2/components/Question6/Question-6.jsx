/**
 * a functional component called Clock.
Use the useState hook to manage a state variable named time initialized to the current time.
Use the useEffect hook to update the time state every second to display the current time.
Render the current time in a <p> element.
When the component unmounts, clear the interval to stop updating the time.
 */

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString()), 1000);
  }, [time]);
  return (
    <>
      <p>{time}</p>
    </>
  );
};
export default Clock;
