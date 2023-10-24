import { memo } from 'react';

const TodoList = ({ todo, completeTodo, index }) => {
  console.log('TodoList');
  return (
    <li style={todo.isCompleted ? { textDecorationLine: 'line-through' } : {}}>
      {todo.todo}
      <button onClick={() => completeTodo(index)}>完了</button>
    </li>
  );
};

export default memo(TodoList);
