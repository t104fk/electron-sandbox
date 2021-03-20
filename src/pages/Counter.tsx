import { useState } from 'react';

const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  }
  return {count, increment};
}

export const Counter = () => {
  const {count, increment} = useCounter(0);
  return <div>
    <h1>{process.pid}</h1>
    <p>{count}</p>
    <button onClick={() => increment()}>inc</button>
  </div>
}
