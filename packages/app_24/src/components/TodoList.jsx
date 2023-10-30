import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import TodoListStats from './TodoListStats';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <h2>Todo一覧</h2>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <h2>Todo登録</h2>
      <TodoItemCreator />
    </>
  );
};

export default TodoList;
