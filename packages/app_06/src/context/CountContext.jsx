import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CountContext = createContext();

export const useCountContext = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useLocalStorage('count', 0);

  const countUp = (num) => {
    setCount((count) => count + num);
  };

  const countDown = (num) => {
    setCount((count) => count - num);
  };

  return <CountContext.Provider value={{ count, setCount, countUp, countDown }}>{children}</CountContext.Provider>;
};
