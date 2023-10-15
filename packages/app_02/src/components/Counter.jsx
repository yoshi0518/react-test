import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, { type, num }) => {
  switch (type) {
    case 'INCREMENT':
      return { count: state.count + num };
    case 'DECREMENT':
      return { count: state.count - num };
    case 'DOUBLE_INCRE':
      return { count: state.count * num };
    case 'RESET':
      return { count: num };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter</h1>
      <h2>カウント：{state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT', num: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', num: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', num: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', num: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'DOUBLE_INCRE', num: 2 })}>*2</button>
      <button onClick={() => dispatch({ type: 'DOUBLE_INCRE', num: 4 })}>*4</button>
      <button onClick={() => dispatch({ type: 'RESET', num: 0 })}>Reset</button>
    </div>
  );
};

export default Counter;
