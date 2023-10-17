import { useContext } from 'react';
import { UserCount1 } from './Counter1';

const Counter1C = () => {
  const { count1, setCount1 } = useContext(UserCount1);
  return (
    <>
      <div>Counter1C</div>
      <div>Count：{count1}</div>
      <div>
        <button onClick={() => setCount1((count1) => count1 + 1)}>＋</button>
        <button onClick={() => setCount1((count1) => count1 - 1)}>－</button>
      </div>
    </>
  );
};

export default Counter1C;
