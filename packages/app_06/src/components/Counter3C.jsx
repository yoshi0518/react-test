import { useCountContext } from '../context/CountContext';

const Counter3C = () => {
  const { count, countUp, countDown } = useCountContext();
  return (
    <>
      <div>Counter3C</div>
      <div>Count：{count}</div>
      <div>
        <button onClick={() => countUp(5)}>＋5</button>
        <button onClick={() => countDown(5)}>－5</button>
      </div>
    </>
  );
};

export default Counter3C;
