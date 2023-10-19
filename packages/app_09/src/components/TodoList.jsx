import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = ({ mode }) => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const todos = useSelector((state) => {
    switch (mode) {
      case 'all':
        return state.todos;
      case 'completed':
        return state.todos.filter((todo) => todo.completed === true);
      case 'uncompleted':
        return state.todos.filter((todo) => todo.completed === false);
      default:
        return state.todos;
    }
  });
  console.log({ mode, todos });

  return todos.length ? (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  ) : (
    <p>※タスクがありません</p>
  );
};

export default TodoList;
