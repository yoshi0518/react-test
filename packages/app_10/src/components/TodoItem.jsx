import { useDispatch } from 'react-redux';

import todoApi from '../api/todos';
import { getData } from '../store/modules/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = async () => {
    await todoApi.update({ ...todo, completed: !todo.completed });
    dispatch(getData());
  };

  const handleRemove = async () => {
    await todoApi.remove(todo);
    dispatch(getData());
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
