import { CountProvider } from '../context/CountContext';
import Counter3A from './Counter3A';

const Counter3 = () => {
  return (
    <>
      <h1>Counter3</h1>
      <CountProvider>
        <Counter3A />
      </CountProvider>
    </>
  );
};

export default Counter3;
