import { useEffect, useState } from 'react';

// 依存配列なし => 初回描画、再描画時に実行
// 依存配列あり(空配列) => 初回描画のみ実行
// 依存配列あり(state) => 指定したstateに変更があった場合に実行

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('[Counter]初回描画、再描画');
  });

  useEffect(() => {
    console.log('[Counter]初回描画のみ');
  }, []);

  useEffect(() => {
    console.log('[Counter]count1のみ更新');
  }, [count1]);

  useEffect(() => {
    console.log('[Counter]count2のみ更新');
  }, [count2]);

  useEffect(() => {
    console.log('[Counter]count1、count2どちらか更新');
  }, [count1, count2]);

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count1：{count1}</h2>
      <button onClick={() => setCount1((count1) => count1 + 1)}>＋</button>
      <h2>Count2：{count2}</h2>
      <button onClick={() => setCount2((count2) => count2 + 1)}>＋</button>
    </div>
  );
};

export default Counter;
