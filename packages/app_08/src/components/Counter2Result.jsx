import { useSelector } from 'react-redux';

const Counter2Result = () => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const count2 = useSelector(({ count2 }) => count2);
  console.log({ count2 });

  return (
    <>
      <div>count2.num：{count2.num}</div>
    </>
  );
};

export default Counter2Result;
