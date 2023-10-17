import { createContext, useReducer } from 'react';
import Counter2A from './Counter2A';

export const UserCount2 = createContext();

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

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter1</h1>
      <UserCount2.Provider value={{ state, dispatch }}>
        <Counter2A />
      </UserCount2.Provider>
    </>
  );
};

export default Counter2;
