import { useState } from 'react';

const FormState = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email：${email} password：${password}`);
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email1">Email：</label>
          <input id="email1" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label htmlFor="password1">Password：</label>
          <input type="password1" id="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </>
  );
};

export default FormState;
