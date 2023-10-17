import { useContext } from 'react';
import { UserCount2 } from './Counter2';

const Counter2C = () => {
  const { state, dispatch } = useContext(UserCount2);
  return (
    <>
      <div>Counter2C</div>
      <div>Count：{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT', num: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: 'INCREMENT', num: 5 })}>+5</button>
        <button onClick={() => dispatch({ type: 'DECREMENT', num: 1 })}>-1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT', num: 5 })}>-5</button>
        <button onClick={() => dispatch({ type: 'DOUBLE_INCRE', num: 2 })}>*2</button>
        <button onClick={() => dispatch({ type: 'DOUBLE_INCRE', num: 4 })}>*4</button>
        <button onClick={() => dispatch({ type: 'RESET', num: 0 })}>Reset</button>
      </div>
    </>
  );
};

export default Counter2C;
