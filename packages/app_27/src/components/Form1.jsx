import { useState } from 'react';

const Form1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <h1>useStateによるForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email：</label>
          <input id="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>パスワード：</label>
          <input id="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </>
  );
};

export default Form1;
