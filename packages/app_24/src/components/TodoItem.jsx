import { useRecoilState } from 'recoil';
import { todoListState } from '../atom';

const TodoItem = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleToggle = (id) => {
    const newTodoList = todoList.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo));
    setTodoList(newTodoList);
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <span>
        {todo.id}：{todo.title}
      </span>
      <button onClick={() => handleToggle(todo.id)}>{todo.isComplete ? '未完了' : '完了'}</button>
      <button onClick={() => handleDelete(todo.id)}>削除</button>
    </div>
  );
};

export default TodoItem;
