import { useState, useEffect } from 'react';
import { supabase } from './supabase';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({ email: data.email, password: data.password });
    console.log({ user, session, error });

    setData({ email: '', password: '' });
  };

  useEffect(() => {
    const getTasks = async () => {
      const { data: tasks, error, status } = await supabase.from('todos').select('*');
      console.log({ tasks, error, status });
      setTasks(tasks);
    };

    getTasks();
  }, []);

  return (
    <>
      <h1>ReactでSupabase</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス：</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>
        <div>
          <label>パスワード：</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </>
  );
};

export default App;
