/**
 *  a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.
 */
import { useState } from "react";
import useTimer from "./useTimer";

const Timer = () => {
  const [time, setTime] = useState();
  const { startTimer, pauseTimer, stopTimer } = useTimer();

  return (
    <>
      <input value={time} onChange={(e) => setTime(e.target.value)} />
      <h4>Timer Value: {time}</h4>
      <button onClick={() => startTimer(time)}>Start Timer</button>
      <button onClick={() => pauseTimer}>Pause Timer</button>
      <button onClick={() => stopTimer}>Stop Timer</button>
    </>
  );
};
export default Timer;
