import { useState, useRef } from 'react';

const Count = () => {
  console.log('再描画');

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleOnClickState = () => setCount((count) => count + 1);
  const handleOnClickRef = () => countRef.current++;

  return (
    <>
      <div>State：{count}</div>
      <div>
        <button onClick={handleOnClickState}>＋</button>
      </div>
      <div>Ref：{countRef.current}</div>
      <div>
        <button onClick={handleOnClickRef}>＋</button>
      </div>
    </>
  );
};

export default Count;
