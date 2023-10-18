import { useSelector, useDispatch } from 'react-redux';

const Count = () => {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  const increase = () => dispatch({ type: 'INCREASE_COUNT' });
  const decrease = () => dispatch({ type: 'DECREASE_COUNT' });

  return (
    <>
      <h1>Countコンポーネント</h1>
      <div>Count：{count}</div>
      <div>
        <button onClick={increase}>Up</button>
        <button onClick={decrease}>Down</button>
      </div>
    </>
  );
};

export default Count;
