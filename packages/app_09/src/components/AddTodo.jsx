import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { create } from '../store/modules/todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (todo === '') return;
    dispatch(create(todo));
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
