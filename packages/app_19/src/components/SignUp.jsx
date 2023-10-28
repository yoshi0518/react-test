import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUserWithEmailAndPassword(auth, email, password);
    // console.log({ response });
    if ('user' in response) navigate('/');
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス：</label>
          <input name="email" type="email" placeholder="email" onChange={(e) => handleChangeEmail(e)} />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" onChange={(e) => handleChangePassword(e)} />
        </div>
        <div>
          <button type="submit">サインアップ</button>
        </div>
      </form>
      <div>
        サインインは<Link to="/sign-in">こちら</Link>
      </div>
    </>
  );
};

export default SignUp;
