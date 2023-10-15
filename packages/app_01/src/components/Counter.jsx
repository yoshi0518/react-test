import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('再描画：' + count);

  return (
    <div>
      <h1>Counter</h1>
      <h2>カウント：{count}</h2>

      <button
        onClick={() => {
          setCount((count) => count + 1);
          console.log('ボタンクリック：' + count);
        }}
      >
        ＋
      </button>
      <button onClick={() => setCount((count) => count - 1)}>－</button>
    </div>
  );
};

export default Counter;
