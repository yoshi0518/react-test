import { Provider } from 'react-redux';
import store from './store';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';

const App = () => {
  return (
    <Provider store={store}>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </Provider>
  );
};

export default App;
