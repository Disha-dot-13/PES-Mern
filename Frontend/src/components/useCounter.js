import { useState } from 'react';

export const useCounter = () => {

  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increament,
    decreament,
    reset
  };
};