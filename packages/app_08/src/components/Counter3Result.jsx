import { useSelector } from 'react-redux';

const Counter3Result = () => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const count3 = useSelector(({ count3 }) => count3);
  console.log({ count3 });

  return (
    <>
      <div>count3：{count3}</div>
    </>
  );
};

export default Counter3Result;
