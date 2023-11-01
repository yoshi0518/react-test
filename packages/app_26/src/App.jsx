import useCountStore from './store';

import Count from './components/Count';
import Reset from './components/Reset';
import Users from './components/Users';
import Subscribe from './components/Subscribe';

const App = () => {
  console.log('再描画');

  // Selector
  const { count, increment, decrement } = useCountStore((state) => ({
    count: state.count,
    increment: state.increment,
    decrement: state.decrement,
  }));
  // 分割代入(再描画を抑止するためにはSelectorを利用する)
  // const { count } = useStore();
  // const { decrement } = useStore();

  return (
    <>
      <h1>Count</h1>
      <div>{count}</div>
      <Count />
      <div>
        <button onClick={() => increment(1)}>＋1</button>
        <button onClick={() => increment(5)}>＋5</button>
        <button onClick={decrement}>ー</button>
      </div>
      <Reset />

      <h1>Users</h1>
      <Subscribe />
      <Users />
    </>
  );
};

export default App;
