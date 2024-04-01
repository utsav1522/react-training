import { useRef, useState } from "react";

// Return the current timer value and methods to start, pause, and reset the timer
const useTimer = () => {
  const [time, setTime] = useState();
  let timerRef = useRef();

  const startTimer = (timeValue) => {
    setTime(timeValue);
    timerRef = setInterval(() => {
      setTime(Number(time) - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    timerRef = setInterval(() => {
      setTime(time);
      return () => clearInterval(timerRef);
    }, 1000);
  };

  const stopTimer = () => {
    setTime();
    return () => clearInterval(timerRef);
  };
  return { startTimer, pauseTimer, stopTimer };
};
export default useTimer;
