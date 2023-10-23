import { Provider } from 'react-redux';

import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import OpenMeteo from './components/openMeteo';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>Todoリスト</h1>
        <h2>タスク追加</h2>
        <AddTodo />
        <h2>未完了タスク</h2>
        <TodoList mode="uncompleted" />
        <h2>完了済タスク</h2>
        <TodoList mode="completed" />
        <h2>Chart</h2>
        <OpenMeteo />
      </Provider>
    </>
  );
};

export default App;
