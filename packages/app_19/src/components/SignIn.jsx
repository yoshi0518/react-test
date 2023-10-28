import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(auth, email, password);
    // console.log({ response });
    if ('user' in response) navigate('/');
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <h1>サインイン</h1>
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
          <button type="submit">サインイン</button>
        </div>
      </form>
      <div>
        サインアップは<Link to="/sign-up">こちら</Link>
      </div>
    </>
  );
};

export default SignIn;
