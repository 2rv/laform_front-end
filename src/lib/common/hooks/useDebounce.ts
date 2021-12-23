import { useState, useEffect } from 'react';

export function useDebounce<Value>(value: Value, timeout: number): Value {
  let [debouncedValue, setDebouncedValue] = useState<Value>(value);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);

  return debouncedValue;
}
