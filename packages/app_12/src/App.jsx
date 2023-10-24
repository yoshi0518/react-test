import { useState, useCallback, useMemo } from 'react';
import Todo from './components/Todo';

// memo => コンポーネントによる再描画を防止
// useCallback => 関数による再描画を防止
const App = () => {
  console.log('App');

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      todo: 'Learn vue.js',
      isCompleted: false,
    },
    {
      todo: 'Learn React',
      isCompleted: false,
    },
    {
      todo: 'Learn Laravel',
      isCompleted: false,
    },
  ]);

  const notCompleteTodos = useMemo(
    () =>
      todos.filter((todo) => {
        console.log('notComplete');
        return todo.isCompleted === false;
      }),
    [todos],
  );

  const inputTodo = (e) => setTodo(e.target.value);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, { todo: todo, isCompleted: false }]);
    setTodo('');
  };

  const completeTodo = useCallback(
    (index) => {
      console.log(index);
      const newTodos = todos.map((todo, todoIndex) =>
        todoIndex === index ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      );
      setTodos(newTodos);
    },
    [todos],
  );

  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={inputTodo} value={todo} />
      </form>
      {/* <Todo todos={todos} completeTodo={completeTodo} /> */}
      <Todo todos={notCompleteTodos} completeTodo={completeTodo} />
    </div>
  );
};

export default App;
