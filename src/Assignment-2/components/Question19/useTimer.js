import { useEffect, useState } from "react";

const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let d;
    if (!isRunning || time < 0) {
      clearInterval(d);
    } else {
      d = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(d);
  }, [time, isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };
  const pauseTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime);
  };
  return { time, setTime, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
