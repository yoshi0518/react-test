const TodoList = ({ todos, setTodos }) => {
  const handleRemoveTask = (index) => {
    const newTodos = [...todos].filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index) => {
    const newTodos = [...todos].map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.isCompleted ? 'line-through' : null }}>
          <input type="checkbox" checked={todo.isCompleted} onChange={() => handleUpdateTask(index)} />
          {todo.task} <button onClick={() => handleRemoveTask(index)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
