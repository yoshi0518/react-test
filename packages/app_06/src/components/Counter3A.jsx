import { useCountContext } from '../context/CountContext';
import Counter3B from './Counter3B';

const Counter3A = () => {
  const { count } = useCountContext();

  return (
    <>
      <div>Counter3A</div>
      <div>Count：{count}</div>
      <Counter3B />
    </>
  );
};

export default Counter3A;
