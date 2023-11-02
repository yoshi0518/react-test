import { useState } from 'react';

const Form1 = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...data });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <h1>Form(useState)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email1">Email：</label>
          <input id="email1" name="email" value={data.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password1">Password：</label>
          <input id="password1" type="password" name="password" value={data.password} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </>
  );
};

export default Form1;
