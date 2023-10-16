import { useLayoutEffect, useState } from 'react';

// useLayoutEffect => コンポーネントに1回のみ記載できる。画面描画前に実行される
// useEffect => コンポーネントに複数記載できる。上から順に実行される
const LayoutEffect = () => {
  const [count, setCount] = useState(99999);

  useLayoutEffect(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <h2>Count：{count}</h2>
    </div>
  );
};

export default LayoutEffect;
