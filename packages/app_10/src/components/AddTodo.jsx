import { useState } from 'react';
import { useDispatch } from 'react-redux';

import todoApi from '../api/todos';
import { getData } from '../store/modules/todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = async () => {
    if (todo === '') return;
    await todoApi.create(todo);
    dispatch(getData());
    setTodo('');
  };

  return (
    <>
      <input value={todo} onChange={handleChange} />
      <button onClick={handleClick}>追加</button>
    </>
  );
};

export default AddTodo;
