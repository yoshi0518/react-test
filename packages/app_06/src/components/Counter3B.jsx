import { useCountContext } from '../context/CountContext';
import Counter3C from './Counter3C';

const Counter3B = () => {
  const { setCount } = useCountContext();

  return (
    <>
      <div>Counter3B</div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>＋</button>
        <button onClick={() => setCount((count) => count - 1)}>－</button>
      </div>
      <Counter3C />
    </>
  );
};

export default Counter3B;
