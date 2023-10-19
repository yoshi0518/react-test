import { useDispatch } from 'react-redux';

import { toggle, remove } from '../store/modules/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggle(id));
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <li>
        {todo.id}：{todo.name}
        <button onClick={() => handleToggle(todo.id)}>{todo.completed ? '未完了' : '完了'}</button>
        <button onClick={() => handleRemove(todo.id)}>削除</button>
      </li>
    </>
  );
};

export default TodoItem;
