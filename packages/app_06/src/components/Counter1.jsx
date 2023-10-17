import { createContext, useState } from 'react';
import Counter1A from './Counter1A';

export const UserCount1 = createContext();

const Counter1 = () => {
  const [count1, setCount1] = useState(0);

  return (
    <>
      <h1>Counter1</h1>
      <UserCount1.Provider value={{ count1, setCount1 }}>
        <Counter1A />
      </UserCount1.Provider>
    </>
  );
};

export default Counter1;
