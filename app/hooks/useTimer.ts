import {useEffect, useState, useRef} from 'react';

interface ITimer {
  second: number;
  startTimer: () => void;
  stopTimer: () => void;
}

export const useTimer = (): ITimer => {
  const timerRef = useRef<any>();
  const [second, setSecond] = useState(59);

  useEffect(() => {
    if (second <= 0) {
      return stopTimer();
    }
    timerRef.current = setInterval(() => {
      setSecond(s => s - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [second]);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const startTimer = () => {
    setSecond(59);
  };

  return {second, stopTimer, startTimer};
};
