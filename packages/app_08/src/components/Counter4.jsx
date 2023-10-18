import { useSelector } from 'react-redux';

import Counter4Button from './Counter4Button';
import Counter4Result from './Counter4Result';

import { add, minus, addAsyncWithStatus } from '../store/modules/count4';

const Counter4 = () => {
  // 指定したステートのみ取得
  const status = useSelector(({ count4 }) => count4.status);
  console.log({ status });

  return (
    <>
      <h1>カウンター4</h1>
      <Counter4Result />
      <div>
        <Counter4Button calcType="+" step={2} actionCreator={add} />
        <Counter4Button calcType="+" step={5} actionCreator={add} />
        <Counter4Button calcType="-" step={2} actionCreator={minus} />
        <Counter4Button calcType="-" step={5} actionCreator={minus} />
        <Counter4Button calcType="(async)-" step={8} actionCreator={addAsyncWithStatus} />
      </div>
      <div>{status}</div>
    </>
  );
};

export default Counter4;
