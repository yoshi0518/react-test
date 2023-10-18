import { useSelector } from 'react-redux';
import store from './store/index';
import Count from './components/Count';
import Posts from './components/Posts';

const App = () => {
  const count = useSelector((state) => state.countReducer.count);

  console.log({ store: store.getState() });

  return (
    <>
      <h1>Appコンポーネント</h1>
      <div>Count：{count}</div>
      <Count />
      <Posts />
    </>
  );
};

export default App;
