// Docs: https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useCounter.ts
import { useCounter } from 'rooks';

const Counter = () => {
  const { value, increment, decrement, reset } = useCounter(10);
  return (
    <>
      <h1>カウンター</h1>
      <div>Count：{value}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
