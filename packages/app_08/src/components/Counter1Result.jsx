import { useSelector } from 'react-redux';

const Counter1Result = () => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const count1 = useSelector(({ count1 }) => count1);
  console.log({ count1 });

  return (
    <>
      <div>count1：{count1}</div>
    </>
  );
};

export default Counter1Result;
