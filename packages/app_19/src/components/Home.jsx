import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得
  const user = useSelector(({ user }) => user);
  // console.log({ user });

  // 未ログインの場合はリダイレクト
  if (!user.status) return <Navigate replace to="/sign-in" />;

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <p>UID：{user.uid}</p>
        <p>email：{user.email}</p>
      </div>
      <div>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
    </>
  );
};

export default Home;
