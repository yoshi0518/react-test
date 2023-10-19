import { Provider } from 'react-redux';
import store from './store';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <h1>タスク追加</h1>
      <AddTodo />
      <h1>未完了タスク</h1>
      <TodoList mode="uncompleted" />
      <h1>完了済タスク</h1>
      <TodoList mode="completed" />
    </Provider>
  );
};

export default App;
