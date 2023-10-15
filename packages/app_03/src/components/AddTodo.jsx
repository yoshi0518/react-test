import { useState } from 'react';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const handleNewTask = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return;
    // console.log({ task, isCompleted: true });
    // console.log(...todos);
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task：
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
