import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

const App = () => {
  return (
    <>
      <h1>stateをuseContextで共有</h1>
      <Counter1 />
      <Counter2 />
      <Counter3 />
    </>
  );
};

export default App;
