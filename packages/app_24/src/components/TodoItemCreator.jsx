import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atom';

let id = 1;
const getId = () => {
  return id++;
};

const TodoItemCreator = () => {
  const [title, setTitle] = useState();
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => setTitle(e.target.value);

  const handleAdd = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title,
        isComplete: false,
      },
    ]);
    setTitle('');
  };

  return (
    <div>
      <input value={title} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
};

export default TodoItemCreator;
