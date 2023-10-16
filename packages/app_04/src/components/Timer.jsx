import { useEffect, useState } from 'react';

// 依存配列あり(空配列) => 初回描画のみ実行
// useEffectで関数をReturn => コンポーネントが削除された場合に実行されるクリーンアップ処理となる

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log('[Timer]初回描画のみ');

    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
      console.log('カウントアップしました');
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('コンポーネントがアンマウントされました');
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h2>Count：{timer}</h2>
    </div>
  );
};

export default Timer;
