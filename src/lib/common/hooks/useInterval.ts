import { useCallback, useEffect, useState } from 'react';

type useIntervalType = [number, () => void];

export function useInterval(
  callback: () => void,
  initialCount: number = 30,
): useIntervalType {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      if (count !== 0) {
        setCount(count - 1);
      }
    }, 1000);

    if (count === 0) {
      clearInterval(id);
      callback();
    }

    return () => clearInterval(id);
  }, [count]);

  const startInterval = useCallback(() => {
    setCount(initialCount);
  }, []);

  return [count, startInterval];
}
