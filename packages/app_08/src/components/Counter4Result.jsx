import { useSelector } from 'react-redux';

const Counter4Result = () => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const count4 = useSelector(({ count4 }) => count4.num);
  console.log({ count4 });

  return (
    <>
      <div>count4：{count4}</div>
    </>
  );
};

export default Counter4Result;
