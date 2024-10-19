import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useUrlState = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialState = (): T => {
    const paramValue = searchParams.get(key);
    if (paramValue !== null) {
      try {
        // Parse JSON if possible
        return JSON.parse(paramValue);
      } catch (_) {
        return paramValue as unknown as T;
      }
    }
    return initialValue;
  };

  const [state, setState] = useState<T>(getInitialState);

  useEffect(() => {
    const updatedParams = new URLSearchParams(searchParams);

    if (state === initialValue || state === null || state === '' || state === undefined) {
      // Remove the key if the state is empty, null, or the initial value
      updatedParams.delete(key);
    } else {
      // Update the URL query parameter with the new state
      updatedParams.set(key, JSON.stringify(state));
    }

    setSearchParams(updatedParams);
  }, [key, state, setSearchParams, searchParams, initialValue]);

  return [state, setState];
};
