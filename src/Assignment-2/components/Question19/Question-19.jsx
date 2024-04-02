/**
 *  a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.
 */
import useTimer from "./useTimer";

const Timer = () => {
  const { time, setTime, isRunning, startTimer, pauseTimer, resetTimer } =
    useTimer(100);

  return (
    <>
      <p>Timer: {time} seconds</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};
export default Timer;
